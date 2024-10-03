import { array, array_map } from "./array_map";

const function_array_map = () => {
  return (
    <div>
      <h2>array map </h2>

      <p className="font_arabic">
        جديدة بنفس الطول بعد التعديل array وتعمل تعديل على كل عنصر فيه، وترجعلك
        array وظيفتهاانها انها بتاخد ال
      </p>
      <ul>
        <li>the origin data is : {array()}</li>
        <li>
          the array map + 1 =<span className="text-danger">{array_map()}</span>
        </li>
      </ul>
    </div>
  );
};

export { function_array_map };
