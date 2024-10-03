const first_Destructuring = () => {
  return [1, 2, 3, 4];
};

const second_Destructuring = () => {
  const [des] = first_Destructuring();
  return des;
};

const third_Destructuring = () => {
  const [, , des] = first_Destructuring();
  return des;
};

export { first_Destructuring, second_Destructuring, third_Destructuring };
