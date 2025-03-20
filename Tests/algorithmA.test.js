import { describe, it, expect } from "@jest/globals";
import algorithmA, { alphChar } from "../Algorithms/algorithmA";

/* Denna funktion definierar reglerna för den feedback spelet ger när spelaren gissar ett ord. Den ska uppfylla följande kriterier:

 Inputs: Två ord (två textsträngar)
 Ett ord som är gissningen
 Ett ord som är det korrekta ordet

 Funktionalitet: Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var
 Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
 letter (bokstaven)
 result (ett av följande värden)
 ‘incorrect’: Finns inte med i det andra ordet
 ‘misplaced’: Finns med i det andra ordet, men på annan plats
 ‘correct’: Korrekt plats i det andra ordet 


   Teststrategi:
   1. Testar att funktionen returnerar en array.
   2. Testar att funktionen returnerar ett objekt.
   3. Testar felplacerade bokstäver ("misplaced").
   4. Testar alla bokstäver på rätt plats ("correct").
   5. Testar helt felaktiga bokstäver ("incorrect").
   6. Testar upprepade bokstäver så att det ger fel när rätt bokstäver redan är rättade.
   7. Testar att funktionen alphChar returnerar true om input är en bokstav och false om input är något annat.
   8. Testar att funktionen alphChar returnerar false om input är en siffra.*/

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
    const result = algorithmA('MAJSA', 'majsa');
    expect(result).toEqual([
        { letter: 'm', result: 'correct' },
        { letter: 'a', result: 'correct' },
        { letter: 'j', result: 'correct' },
        { letter: 's', result: 'correct' },
        { letter: 'a', result: 'correct' },
    ]);
  });

  it('Upprepade bokstäver', () => {
    const result = algorithmA('Musik', 'Mamma');
    expect(result).toEqual([
      { letter: 'm', result: 'correct' },
      { letter: 'u', result: 'incorrect' },
      { letter: 's', result: 'incorrect' },
      { letter: 'i', result: 'incorrect' },
      { letter: 'k', result: 'incorrect' },
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

describe('alphaChar (kontrollerar att det är alfabetiska tecken)' , () => {

  it('Returnerar true för endast alfabetiska tecken', () => {
    expect(alphChar('Somna')).toBe(true);
    expect(alphChar('skrik')).toBe(true);
    expect(alphChar('LILLA')).toBe(true);
    expect(alphChar('prutt')).toBe(true);
    expect(alphChar('glada')).toBe(true);
  });

  it('Returnerar false för icke alfabetiska tecken', () => {
    expect(alphChar('M4mma')).toBe(false);
    expect(alphChar('heja!')).toBe(false);
    expect(alphChar(' ')).toBe(false);
    expect(alphChar('Brav.')).toBe(false);
    expect(alphChar('$agan')).toBe(false);
  });
});