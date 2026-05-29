/**
 * @deprecated Use populate-anchors-from-syllabus.mjs --module makro1
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = ['--module', 'makro1', ...process.argv.slice(2)];
const r = spawnSync(process.execPath, [path.join(__dirname, 'populate-anchors-from-syllabus.mjs'), ...args], {
  stdio: 'inherit'
});
process.exit(r.status ?? 1);
