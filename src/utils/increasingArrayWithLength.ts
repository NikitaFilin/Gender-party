export function increasingArrayWithLength(length: number): Array<string> {
  let localLength = length;
  if (length < 0) {
    console.warn(
      `increasingArrayWithLength ERROR: param length = ${length} is smaller than 0`
    );
    localLength = 0;
  }
  return Object.keys(new Array(localLength).fill(0));
}
