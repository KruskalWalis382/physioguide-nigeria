import { describe, it, expect } from "vitest";
import { getResult } from "@/lib/checker";

describe("safety checker", () => {
  it("any warning sign gives urgent advice", () => {
    expect(getResult(["saddle"], [])).toBe("urgent");
  });
  it("warning sign is not overridden by other answers", () => {
    expect(getResult(["bladder"], ["night"])).toBe("urgent");
  });
  it("concern without warning signs suggests professional assessment", () => {
    expect(getResult([], ["fever"])).toBe("soon");
  });
  it("no signs gives general information only", () => {
    expect(getResult([], [])).toBe("general");
  });
});
