/**
 * Run full exam-OS fleet pass: anchors → VL layers → mastery → audit → readiness.
 * Usage: node tools/exam-os/run-fleet-certification.mjs [--write] [--skip-trust]
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

function run(cmd, args = []) {
  console.log(`\n> ${cmd} ${args.join(' ')}`);
  const r = spawnSync(cmd, args, { cwd: repoRoot, stdio: 'inherit', shell: false });
  if (r.status !== 0) throw new Error(`Failed: ${cmd} ${args.join(' ')}`);
}

const write = process.argv.includes('--write');
const skipTrust = process.argv.includes('--skip-trust');
const flag = write ? ['--write'] : [];

const VL_MODULES = [
  'statistik',
  'mathematik',
  'makro1',
  'makro2',
  'mikro2',
  'oekonometrie',
  'finanzwirtschaft',
  'jahresabschluss',
  'recht',
  'internationale-wirtschaftsbeziehungen'
];

try {
  run(process.execPath, ['tools/exam-os/populate-anchors-from-syllabus.mjs', '--all', ...flag]);

  for (const slug of VL_MODULES) {
    run(process.execPath, ['tools/exam-os/generate-vl-layers.mjs', '--module', slug, ...flag]);
  }

  run(process.execPath, ['tools/exam-os/generate-mastery-scaffold.mjs', '--all', ...flag]);

  run(process.execPath, ['tools/exam-os/ci-validate.mjs']);

  if (write) {
    run(process.execPath, ['tools/exam-os/audit-current-state.mjs', '--write']);
    run(process.execPath, ['tools/exam-os/check-readiness.mjs', '--write']);
    run(process.execPath, ['tools/exam-os/build-module-parity-report.mjs', '--write']);
  }

  if (!skipTrust && write) {
    const clickthrough = path.join(repoRoot, 'tools/clickthrough');
    const r = spawnSync('npm', ['run', 'trust:pass1'], { cwd: clickthrough, stdio: 'inherit' });
    if (r.status !== 0) throw new Error('trust:pass1 failed');
  }

  console.log('\nFleet certification pass complete.');
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
