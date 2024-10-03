const Origin = () => {
  return [1, 2, 3, 4];
};

const spread = () => {
  return [...Origin(), 5, 6, 7];
};

const data = () => {
  return { id: "1", name: "mina" };
};

const add_data = () => {
  return { ...data, age: "33" };
};

export { spread, Origin, data,add_data };
