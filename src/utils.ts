export const makeArray = (from: number, length = 5) => {
  const newArr = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    newArr[i] = from + i;
  }
  return newArr;
};
