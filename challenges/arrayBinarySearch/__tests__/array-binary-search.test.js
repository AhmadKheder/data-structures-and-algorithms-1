/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line no-undef

let search = require('../array-binary-search.js');

describe('BinarySearch()', () => {

  it('Can successfully search ', () => {
    expect(search([4,8,15,16,23,42], 15)).toEqual(2);
    expect(search([11,22,33,44,55,66,77],90).toEqual(-1));
    expect(search([11,22,33,44,55,66,77],11).toEqual(0));
    expect(search([11,22,33,44,55,66,77],77)).toEqual(6);
  });
});
