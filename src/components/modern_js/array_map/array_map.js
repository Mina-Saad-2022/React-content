const array = () => {
  return [1, 2, 3, 4];
};

const array_map = () => {
  return array().map((item, index) => <li key={index}>{item + 1}</li>);
};

export { array, array_map };
