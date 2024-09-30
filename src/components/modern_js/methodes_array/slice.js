const getLetters = () => {
    return ["A", "B", "C", "D", "E"];
  };
  
  // دالة ترجع العناصر من الـ index 2 لحد النهاية
  const getFromIndexTwo = () => {
    return getLetters().slice(2);
  };
  
  // دالة ترجع أول رقمين
  const getFirstTwoLetters = () => {
    return getLetters().slice(0, 2);
  };
  
  // دالة ترجع العنصر الثالث (بداية من 0)
  const getLetterAtIndexTwo = () => {
    return getLetters().slice(2, 3); // استخدمنا slice(2, 3) عشان نجيب عنصر واحد فقط
  };
  
  // دالة ترجع آخر رقمين
  const getLastTwoLetters = () => {
    return getLetters().slice(-2);
  };
  
  // دالة ترجع العناصر من الـ index 1 لحد 4 (بما فيهم 1)
  const getMiddleLetters = () => {
    return getLetters().slice(1, 4);
  };
  
  // دالة ترجع كل العناصر
  const getAllLetters = () => {
    return getLetters().slice();
  };
  
  export { getLetters, getFromIndexTwo, getFirstTwoLetters, getLetterAtIndexTwo, getLastTwoLetters, getMiddleLetters, getAllLetters };
  