
const capital_letter = (str) => {
  return str.toLowerCase(); // الدالة بتحول النص لكلمات صغيرة
};

const small_letter = () => {
  const original = 'HELLO WORLD'; 
  return {
    original, 
    small: capital_letter(original) // النص المعدل
  };
};

export { small_letter, capital_letter }; // هنا بتصدر الدالة
