const getNumberArray = () => {
  return [1, 2, 3, 4, 5];
};

const joinNumberArrayWithComma = () => {
  return getNumberArray().join(",");
};

export { getNumberArray, joinNumberArrayWithComma };
