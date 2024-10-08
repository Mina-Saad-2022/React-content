import { createUserData, getUserData } from "./primitive_type";

const primitive_old_data = getUserData();
const primitive_new_data = createUserData();

const function_primitive_type = () => {
  return (
    <div>
      <h2>Primitive type</h2>

      <p className="font_arabic">
        الحاجات دي بتتحفظ في الذاكرة كقيمة، مش كمرجع boolean دي أنواع البيانات
        البسيطة زي الأرقام، النصوص، الـ
      </p>

      <ul>
        <li>
          the origin data is name :
          <span className="text-danger">{primitive_old_data.name}</span>
        </li>
        <li>
          after i use primitive type i change the data is name :
          <span className="text-danger">{primitive_new_data.name}</span>
        </li>
      </ul>
    </div>
  );
};

export { function_primitive_type };
