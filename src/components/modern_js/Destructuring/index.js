import { first_Destructuring, second_Destructuring, third_Destructuring } from "./Destructuring";
import "bootstrap/dist/css/bootstrap.min.css";

const function_Destructuring = () => {
  return (
    <div>
      <h2>Destructuring</h2>
      <p className="font_arabic">
        بسهولة وتحطها في متغيرات منفصلة. objects او arrays دي طريقة عشان تستخرج
        القيم من
      </p>
      <ul>
        <ol>the origin data is {first_Destructuring()}</ol>

      <ol>
          when i type [des] the result =
          <span className="text-danger">{second_Destructuring()}</span>
        </ol>
        <ol>
          when i type [ , , des] the result =
          <span className="text-danger">{third_Destructuring()}</span>
        </ol>
      </ul>
    </div>
  );
};

export { function_Destructuring };
