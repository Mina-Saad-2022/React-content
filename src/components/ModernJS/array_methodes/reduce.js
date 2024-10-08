const reduce_data = () => {
  return [1, 2, 3, 4, 5];
};

const sum_array = () => {
  return reduce_data().reduce((start, end) => start + end);
};

const difference_array = () => {
  return reduce_data().reduce((start, end) =>  end - start);
};
const multiplication_array = () => {
  return reduce_data().reduce((start, end) => start * end);
};
const division_array = () => {
  return reduce_data().reduce((start, end) => start / end);
};
export {
  reduce_data,
  sum_array,
  difference_array,
  multiplication_array,
  division_array,
};
