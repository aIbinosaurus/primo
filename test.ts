import { merge } from "./merge";

describe("merge", () => {
  it("merge two sorted arrays", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const merged = merge(collection1, collection2);

    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(merged).toEqual(expectedArray);
  });

  it("empty arrays", () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6, 8];
    const merged = merge(collection1, collection2);

    expect(merged).toEqual(collection2);
  });

  it("both arrays is empty", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);

    expect(merged).toEqual([]);
  });
});
