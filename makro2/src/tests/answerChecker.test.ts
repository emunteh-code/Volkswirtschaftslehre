import { describe, it, expect } from 'vitest';
import { normalizeAnswer, checkAnswerWithTolerance } from '../utils/answerChecker.js';

// ============================================================
// normalizeAnswer
// ============================================================

describe('normalizeAnswer', () => {
  it('lowercases input', () => {
    expect(normalizeAnswer('MRS')).toBe('mrs');
  });

  it('strips whitespace', () => {
    expect(normalizeAnswer('p x / p y')).toBe('px/py');
  });

  it('removes underscores and commas', () => {
    expect(normalizeAnswer('x_1,x_2')).toBe('x1x2');
  });

  it('removes asterisks', () => {
    expect(normalizeAnswer('a*b')).toBe('ab');
  });

  it('retains allowed math chars', () => {
    expect(normalizeAnswer('MU_x/MU_y=p_x/p_y')).toBe('mux/muy=px/py');
  });

  it('retains greek letters', () => {
    expect(normalizeAnswer('λαβγ')).toBe('λαβγ');
  });

  it('strips everything else', () => {
    // Parens, braces, !, @ etc. should be removed
    expect(normalizeAnswer('f(x)!')).toBe('fx');
  });

  it('returns empty string for empty input', () => {
    expect(normalizeAnswer('')).toBe('');
  });

  it('handles non-string input via String() coercion', () => {
    // @ts-expect-error — testing runtime safety
    expect(normalizeAnswer(42)).toBe('42');
  });
});

// ============================================================
// checkAnswerWithTolerance — trap detection
// ============================================================

describe('checkAnswerWithTolerance — traps', () => {
  const accepted = ['MRS'];
  const traps = [{ pattern: 'mrs=0', msg: 'MRS ist im Optimum nicht null.' }];

  it('triggers a trap when pattern matches', () => {
    const r = checkAnswerWithTolerance('MRS=0', accepted, traps);
    expect(r.correct).toBe(false);
    expect(r.trap).toBe('MRS ist im Optimum nicht null.');
  });

  it('traps are case-insensitive', () => {
    const r = checkAnswerWithTolerance('mrs=0', accepted, traps);
    expect(r.correct).toBe(false);
    expect(r.trap).toBeDefined();
  });

  it('returns correct if no trap fires even with traps provided', () => {
    const r = checkAnswerWithTolerance('MRS', accepted, traps);
    expect(r.correct).toBe(true);
    expect(r.trap).toBeUndefined();
  });
});

// ============================================================
// checkAnswerWithTolerance — numeric tolerance
// ============================================================

describe('checkAnswerWithTolerance — numeric tolerance (2%)', () => {
  const accepted = ['100'];

  it('accepts exact numeric match', () => {
    expect(checkAnswerWithTolerance('100', accepted).correct).toBe(true);
  });

  it('accepts value within 2% above', () => {
    // 101 is 1% above 100 — within tolerance
    expect(checkAnswerWithTolerance('101', accepted).correct).toBe(true);
  });

  it('accepts value within 2% below', () => {
    // 99 is 1% below — within tolerance
    expect(checkAnswerWithTolerance('99', accepted).correct).toBe(true);
  });

  it('rejects value outside 2%', () => {
    // 97 is 3% below — outside
    expect(checkAnswerWithTolerance('97', accepted).correct).toBe(false);
  });

  it('handles comma-decimal input (German locale)', () => {
    expect(checkAnswerWithTolerance('99,5', accepted).correct).toBe(true);
  });

  it('handles comma-decimal accepted answer', () => {
    const r = checkAnswerWithTolerance('1.5', ['1,5']);
    expect(r.correct).toBe(true);
  });

  it('uses Math.max(1, |numA|) denominator to avoid division by zero', () => {
    // numA = 0, numInput = 0 → |0-0|/max(1,0) = 0 < 0.02 → correct
    expect(checkAnswerWithTolerance('0', ['0']).correct).toBe(true);
  });

  it('non-numeric strings fall through to string matching', () => {
    // 'abc' is not numeric, should fall through and be checked as string
    const r = checkAnswerWithTolerance('abc', ['abc']);
    expect(r.correct).toBe(true);
  });
});

// ============================================================
// checkAnswerWithTolerance — string matching
// ============================================================

describe('checkAnswerWithTolerance — string matching', () => {
  it('matches exact normalized string', () => {
    expect(checkAnswerWithTolerance('MRS', ['MRS']).correct).toBe(true);
  });

  it('is case-insensitive in string matching', () => {
    expect(checkAnswerWithTolerance('mrs', ['MRS']).correct).toBe(true);
  });

  it('matches when user input contains accepted answer (substring rule)', () => {
    // accepted = 'fallend', user = 'fallende kurve' → val contains normA
    expect(checkAnswerWithTolerance('fallende kurve', ['fallend']).correct).toBe(true);
  });

  it('matches partial input when ≥55% of accepted length (reverse substring)', () => {
    // normA = 'gleichgewicht' (13 chars), normVal needs ≥ ceil(13*0.55) = 8 chars
    // 'gleichgew' (9 chars) — should match
    expect(checkAnswerWithTolerance('gleichgew', ['Gleichgewicht']).correct).toBe(true);
  });

  it('rejects partial input below 55% threshold', () => {
    // 'gl' (2 chars) < ceil(13*0.55)=8 — rejected
    expect(checkAnswerWithTolerance('gl', ['Gleichgewicht']).correct).toBe(false);
  });

  it('uses exact match for single-char accepted answers', () => {
    expect(checkAnswerWithTolerance('a', ['a']).correct).toBe(true);
    expect(checkAnswerWithTolerance('ab', ['a']).correct).toBe(false);
  });

  it('returns correct:false with no trap when nothing matches', () => {
    const r = checkAnswerWithTolerance('wrong', ['right']);
    expect(r.correct).toBe(false);
    expect(r.trap).toBeUndefined();
  });

  it('accepts multiple accepted answers — stops at first match', () => {
    const r = checkAnswerWithTolerance('zwei', ['eins', 'zwei', 'drei']);
    expect(r.correct).toBe(true);
  });

  it('works with empty traps array (default)', () => {
    const r = checkAnswerWithTolerance('test', ['test']);
    expect(r.correct).toBe(true);
  });
});

// ============================================================
// Edge cases
// ============================================================

describe('checkAnswerWithTolerance — edge cases', () => {
  it('empty input against empty accepted answer', () => {
    // Both normalize to '' — normA.length = 0 ≤ 1, exact match ''==='' → correct
    expect(checkAnswerWithTolerance('', ['']).correct).toBe(true);
  });

  it('empty accepted answers array returns false', () => {
    expect(checkAnswerWithTolerance('100', []).correct).toBe(false);
  });

  it('handles formula-like answers with slashes', () => {
    expect(checkAnswerWithTolerance('px/py', ['px/py']).correct).toBe(true);
  });

  it('handles LaTeX-style answer with equals sign', () => {
    expect(checkAnswerWithTolerance('MRS=px/py', ['mrs=px/py']).correct).toBe(true);
  });
});
