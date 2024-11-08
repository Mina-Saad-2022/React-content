import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const FunctionComponent = () => {
  const [count, setcount] = useState(0);

  const add_one = () => {
    setcount(count + 1);
  };

  const subtraction_one = () => {
    setcount(count - 1);
  };

  return (
    <>
      <h4>the count is : {count}</h4>
      <div className="d-flex justify-content-center flex-wrap">
        <Button
          className="w-auto m-2 p-3"
          onClick={add_one}
          variant="primary"
        >
          <h4>+</h4>
        </Button>

        <Button
          className="w-auto m-2 p-3"
          onClick={subtraction_one}
          variant="secondary"
        >
          <h4>-</h4>
        </Button>
      </div>
    </>
  );
};

const function_UseState = () => {
  return (
    <div className="container">
      <h2>UseState</h2>
      <ul>
        <li>معناها حالةاو قيمة او الوضع الحالي state كلمة </li>
        <li>react دي حاجة جاهزة مبنية جوا ال usestate والـ </li>
        <li>
          لتغير قيمة اياً كانت هي ايه سواء رقم او حرف او كلمة usestate استخدام
          ال{" "}
        </li>
      </ul>
      <h4>طريقة الاستخدام</h4>
      <ul>
        <ol>
          <li>
            لازم استدعيها في بداية الصفحة
            <br />
            <Image
              className="w-75 zoom-image mt-2 rounded"
              src="https://gcdnb.pbrd.co/images/SeweX47ckOcJ.png?o=1"
            />
          </li>
          <li>function component عند الاستخدام لازم طبعا يكون في</li>
          <li>value وبتاخد 2 array بتكون جوا usestate ال</li>
          <ul>
            <li>الاول هو عبارة عن القيمة الحالية الموجودة دلوقت</li>
            <li>الثاني هو عبارة عن القيمة بعد التحديث</li>
          </ul>
          <p className="text-danger">
            {" "}
            بمعني ان هو دالة يتم استخدامها لتحديث القيمةالحالية{" "}
          </p>
          <li>useState() = بقول array بعد كتابة ال</li>
        </ol>
      </ul>
      <h6>Example</h6>
      <p>الاول يزود 1 والتاني ينقص 1 button عندي مثلا رقم قيمته 0 وعندي 2</p>
      <p>usestate الاول هنعمل زي مقلنا هنستدعي ال</p>
      <p>
        زي منا عايز usestate علشان اقدار استخدم ال function بعد كده هنعمل بتاعتي
        <br /> وفيها القيمة الهبداء بيها usestate من 2 قيمة وبيساوي ال array
        وهتكون عبارة عن
      </p>
      <Image
        className="w-50 zoom-image mt-2 rounded"
        src="https://gcdnb.pbrd.co/images/m0sMXgum0Lvk.png?o=1"
      />
      <p>بتعبر عن القيمة القديمة وهي رقم 0 count وهنا ال </p>
      <p>بتعبر عن القيمة بعد التحديث setcount وال </p>
      <p>
        function component الاول للجمع والتاني للطرح وهستدعي في كل واحد الدالة
        بتعته في نفس ال button بعد كده هعمل 2
      </p>
      <Image
        className="w-50 zoom-image mt-2 rounded"
        src="https://gcdnb.pbrd.co/images/Pu8qZC2ONlEK.png?o=1"
      />
      <div className="border text-center pt-2 w-100 mt-2">
        <FunctionComponent />
      </div>
    </div>
  );
};

export { function_UseState };
