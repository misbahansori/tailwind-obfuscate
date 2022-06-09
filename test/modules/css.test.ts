import { describe, expect, it } from "vitest";
import transformCSSFiles from "../../src/modules/css";

describe("test css transformer", () => {
  it("should not transform anything", () => {
    const code = `none`;

    const classMapping = new Map();
    const result = transformCSSFiles(code, classMapping);

    expect(result.code).toBe("none");
  });

  it("should transform .text-gray-400 to .asdfg", () => {
    const code = `.text-gray-400{`;

    const classMapping = new Map();
    classMapping.set("text-gray-400", "asdfg");
    const result = transformCSSFiles(code, classMapping);

    expect(result.code).toMatch(/.asdfg{/);
  });

  it("should transform .hover:text-gray-400:hover to .asdfg:hover", () => {
    const code = `.hover:text-gray-400:hover{`;

    const classMapping = new Map();
    classMapping.set("hover:text-gray-400", "asdfg");
    const result = transformCSSFiles(code, classMapping);

    expect(result.code).toMatch(/.asdfg:hover{/);
  });
});
