export function merge(collection1: number[], collection2: number[]): number[] {
  const result: number[] = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < collection1.length && index2 < collection2.length) {
    if (collection1[index1] < collection2[index2]) {
      result.push(collection1[index1]);
      index1++;
    } else {
      result.push(collection2[index2]);
      index2++;
    }
  }

  while (index1 < collection1.length) {
    result.push(collection1[index1]);
    index1++;
  }
  while (index2 < collection2.length) {
    result.push(collection2[index2]);
    index2++;
  }
  return result;
}

// describe("merge", () => {
//   it("merge two sorted arrays", () => {
//     const collection1 = [1, 3, 5, 7];
//     const collection2 = [2, 4, 6, 8];
//     const merged = merge(collection1, collection2);

//     const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8];

//     expect(merged).toEqual(expectedArray);
//   });

//   it("empty arrays", () => {
//     const collection1: number[] = [];
//     const collection2 = [2, 4, 6, 8];
//     const merged = merge(collection1, collection2);

//     expect(merged).toEqual(collection2);
//   });

//   it("both arrays is empty", () => {
//     const collection1: number[] = [];
//     const collection2: number[] = [];
//     const merged = merge(collection1, collection2);

//     expect(merged).toEqual([]);
//   });
// });
