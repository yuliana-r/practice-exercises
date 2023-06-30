const analyze = require('./analyzeArray');

test('returns correct properties', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})

test('returns correct properties in array with identical elements', () => {
    expect(analyze([1,1,1,1,1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 5
      });
})

test('returns correct properties in array with 1 element', () => {
    expect(analyze([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1
      });
})

test('returns correct properties with decimals', () => {
    expect(analyze([5,4,8,9,3,2,5])).toEqual({
        average: 5.14, 
        min: 2, 
        max: 9, 
        length: 7
      });
})