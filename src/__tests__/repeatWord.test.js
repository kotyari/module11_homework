import {repeatWord} from "../repeatWord.js";

describe ("tests for repeatWord function", () => {

  it ("should operate correctly with one word", () => {
    expect(repeatWord("try", 1)).toBe("try1.")
  }),

  it ("should operate correctly with many words", () => {
    expect(repeatWord("try", 5)).toBe("try1, try2, try3, try4, try5.")
  }),

  it ("should return only numbers if you are not add word", () => {
    expect(repeatWord("", 10)).toBe("1, 2, 3, 4, 5, 6, 7, 8, 9, 10.")
  }),
  
  it ("should operate correctly with 0(return empty)", () => {
    expect(repeatWord("try", 0)).toBe("")
  }),

  it ("should operate correctly with 0 and no words(return empty)", () => {
    expect(repeatWord("", 0)).toBe("")
  }),

  it ("should return empty with negative numbers", () => {
    expect(repeatWord("try", -5)).toBe("")
  })


})