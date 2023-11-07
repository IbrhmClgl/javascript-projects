import { checkEquality } from "./lib";

/// <reference types="jest" />

describe("checkEquality", () => {
  it("should be equal inputs", () => {
    expect(checkEquality("abs", "abs")).toBeTruthy();
  });

  it("should be different inputs", () => {
    expect(checkEquality("abcde", "fghijk")).toBeFalsy();
  });

  it("shoudl have empty inputs", () => {
    expect(checkEquality("", "")).toBeTruthy();
  });
});
