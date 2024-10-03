import { small_letter} from "./higher_order_function"; // استخدام الأقواس المعكوسة

const {small,original} = small_letter(); // استدعاء الدالة هنا
const function_higher_order_function = () => {
  return (
    <div>
      <h2>Higher Order Function</h2>
      <p className="font_arabic">
        `arguments` دي دالة بتاخد دوال تانية كـ
        <br />
        `map`, `filter`, `reduce` أو بترجع دالة تانية. زي
        <br />
        عشان ينفذوا حاجة معينة callback اللي بياخدوا دالة كـ
      </p>
      <p>the origin data is : {original}</p>
      <p>the small letter is: <span className="text-danger">{small}</span></p> 
    </div>
  );
};

export { function_higher_order_function };
