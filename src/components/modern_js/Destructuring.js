const first = () => {
  return [1, 2, 3, 4];
};

const second = () => {
  const [des] = first();
  return des;
};


const third = () => {
  const [ , ,des] = first();
  return des;
};


export { first , second ,third };