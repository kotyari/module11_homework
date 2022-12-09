import {repeatWord} from "./__tests__/repeatWord.js"

describe ("tests for repeatWord function", () => {

  it ("should operate correctly with one word", () => {
    expect(repeatWord("try", 1)).toBe("try1")
  })


})