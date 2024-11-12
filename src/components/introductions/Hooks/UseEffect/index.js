import { Image, Form } from "react-bootstrap";

import React, { useState, useEffect } from "react";

const InputExample = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {}, [inputValue]);

  return (
    <div>
      <Form.Control
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
        className="w-50"
      />
      <p className="p-2">You typed: {inputValue}</p>
    </div>
  );
};

const function_UseEffect = () => {
  return (
    <>
      <div className="container">
        <h2>UseEffect</h2>
        <ul>
          <li>
            مش هتتنفذ غير لما يحصل تاثير او تغير معينuseEffect معناها تاثير
            بمعني ان ال Effect كلمة
          </li>
          <li>
            to make life cycle methods in different times : هو الاتي UseEffect
            تعريف ال
          </li>
          <li>
            life cycle اول لما حاجة تتغير في ده اسمه run بتاعي اول معمله
            component معناها ان مثلا ال life cycle وال
          </li>
        </ul>
        <h4>طريقة الاستخدام</h4>
        <ul>
          <ol>
            <li>
              لازم استدعيها في بداية الصفحة
              <br />
              <Image
                className="zoom-image mt-2 rounded"
                src="https://gcdnb.pbrd.co/images/y0AFE6FR16iT.png?o=1"
              />
            </li>
          </ol>

          <li>
            array والثاني عبارة عن function الاول عبارة عن parameter بتاخد 2
            useEffect ال
            <br />
            <Image
              className="zoom-image mt-2 rounded"
              src="https://gcdnb.pbrd.co/images/3Jp7Vh8A1Zjh.png?o=1"
            />
          </li>
          <li>
            <span>
              <h5 className="text-danger">هام جدا</h5>: بيتخلص في ثلاث حالات وهم
              UseEffect استخدام ال
            </span>
            <ul>
              <ol>
                <li>
                  <h5>array في حالة اني مش كاتب</h5>
                  هتشتغل useEffect في اي مكان ال component لل render وفي الحالة
                  دي لما اعمل{" "}
                </li>
                <li>
                  <h5>ولكن فاضيةarray في حالة اني كاتب</h5> component هتتنفذ مرة
                  واحدة بس لما انده علي ال useEffectفي وفي الحالة دي ال
                </li>
                <li>
                  <h5>ولكن فيها شرط array في حالة اني كاتب</h5>
                  مش هتتنفذ غير لما الشرط يحصل فيه تغير وعادي ممكن اكتب اكتر من
                  شرط UseEffect وفي الحالة دي ال
                </li>
              </ol>
            </ul>
          </li>
        </ul>
        <h4>Example</h4>
        <p>
          بمجرد منكتبها input علشان نعرض القيمة المكتوبة في ال useEffect هنستخدم
          ال
        </p>
        <InputExample />
      </div>
    </>
  );
};

export { function_UseEffect };
