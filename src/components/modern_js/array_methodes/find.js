const generateNumberArray = () => {
    return [1, 2, 3, 4, 5];
  };
  
  // دالة للبحث عن أول عنصر أكبر من 2
  const findFirstNumberGreaterThanTwo = () => {
    return generateNumberArray().find((item) => item > 2);
  };
  
  export { generateNumberArray, findFirstNumberGreaterThanTwo };
  