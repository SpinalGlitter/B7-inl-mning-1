import { describe, it, expect } from "@jest/globals";
import algorithmA from "../Algorithms/algorithmA";
  // Teststrategi:
  // 1. Testar att funktionen returnerar en array.
  // 2. Testar felplacerade bokstäver ("misplaced").
  // 3. Testar alla bokstäver på rätt plats ("correct").
  // 4. Testar helt felaktiga bokstäver ("incorrect").
  // 5. Testar upprepade bokstäver.
  // 6. Testar att funktionen returnerar ett objekt.
describe('algorithmA', () => {
  it('Funktionen returnerar en array', () => {
    const result = algorithmA('ABC', 'ABC');
    expect(Array.isArray(result)).toBe(true);
  });

  it('Funktionen returnerar ett objekt', () => {
    const result = algorithmA('ABC', 'ABC');
    expect(typeof result[0]).toBe('object');
  });

  it('Felplacerad bokstav på', () => {
    const result = algorithmA('HALLÅ', 'CYKLA');
    expect(result).toEqual([
        { letter: 'h', result: 'incorrect' },
        { letter: 'a', result: 'misplaced' },
        { letter: 'l', result: 'incorrect' },
        { letter: 'l', result: 'correct' },
        { letter: 'å', result: 'incorrect' },
    ]);
  });

  it('Alla bokstäver korrekta', () => {
    const result = algorithmA('BAJSA', 'bajsa');
    expect(result).toEqual([
        { letter: 'b', result: 'correct' },
        { letter: 'a', result: 'correct' },
        { letter: 'j', result: 'correct' },
        { letter: 's', result: 'correct' },
        { letter: 'a', result: 'correct' },
    ]);
  });

  it('Helt felaktiga bokstäver', () => {
    const result = algorithmA('Panna', 'Boris');
    expect(result).toEqual([
      { letter: 'p', result: 'incorrect' },
      { letter: 'a', result: 'incorrect' },
      { letter: 'n', result: 'incorrect' },
      { letter: 'n', result: 'incorrect' },
      { letter: 'a', result: 'incorrect' },
    ]);
  });

});