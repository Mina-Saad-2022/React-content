const data_filter = () => {
    return [1, 2, 3, 4, 5];
  };
  
  // دالة لتصفية الأرقام الأكبر من 2
  const filterNumbersGreaterThanTwo = () => {
    return data_filter().filter((item) => item > 2);
  };
  
  // دالة لتصفية الأرقام الأقل من 2
  const filterNumbersLessThanTwo = () => {
    return data_filter().filter((item) => item < 2);
  };
  
  // دالة لتصفية الأرقام المتساوية مع 2
  const filterNumbersEqualToTwo = () => {
    return data_filter().filter((item) => item === 2);
  };
  
  export { data_filter, filterNumbersGreaterThanTwo, filterNumbersLessThanTwo, filterNumbersEqualToTwo };
  