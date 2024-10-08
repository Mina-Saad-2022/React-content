const array_one = () => {
  return [1, 2, 3, 4];
};
const array_two = () => {
  return ["A", "B", "C", "D"];
};
const arra_concat = () => {
  return array_one().concat(array_two());
};

export { array_one, array_two, arra_concat };
