import React, { useState, useEffect } from "react";
import { Image, Form, Container } from "react-bootstrap";

const InputExample = () => {
  const [inputValue, setInputValue] = useState("");

  // استخدام useEffect لمراقبة أي تغيير في قيمة inputValue
  useEffect(() => {
    console.log("Input value changed:", inputValue);
  }, [inputValue]);

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
    <Container className="my-4">
      <h2>UseEffect</h2>
      <ul>
        <li>
          كلمة <strong>Effect</strong> معناها تأثير، و <strong>useEffect</strong> مش
          هيتنفذ غير لما يحصل تأثير أو تغيير معين في التطبيق.
        </li>
        <li>
          <strong>UseEffect</strong> بيخلينا نتحكم في الـ lifecycle methods في أوقات
          معينة.
        </li>
        <li>
          مثال على lifecycle: لما يحصل render للـ component في أول مرة أو لما حاجة
          تتغير فيه.
        </li>
      </ul>
      <h4>طريقة الاستخدام</h4>
      <ul>
        <li>
          في الأول، بنستدعي <strong>useEffect</strong> في بداية الكود.
          <Image
            className="zoom-image mt-2 rounded w-100 w-md-75"
            src="https://gcdnb.pbrd.co/images/y0AFE6FR16iT.png?o=1"
          />
        </li>
        <li>
          <strong>useEffect</strong> بتاخد two parameters: الأول عبارة عن function
          والتاني array، زي كده:
          <Image
            className="zoom-image mt-2 rounded w-100 w-md-75"
            src="https://gcdnb.pbrd.co/images/3Jp7Vh8A1Zjh.png?o=1"
          />
        </li>
        <li>
          <h5 className="text-danger">هام جدا:</h5> استخدام <strong>useEffect</strong>{" "}
          بينقسم لثلاث حالات:
          <ul>
            <li>
              <strong>بدون array:</strong> في الحالة دي، <strong>useEffect</strong>{" "}
              هتشتغل في أي render يحصل للـ component.
            </li>
            <li>
              <strong>Array فاضية:</strong> لما تكون array فاضية، <strong>useEffect</strong>{" "}
              هتشتغل مرة واحدة بس وقت الـ mount الأول للـ component.
            </li>
            <li>
              <strong>Array فيها شرط:</strong> <strong>useEffect</strong> مش
              هتشتغل غير لما يحصل تغيير في الشرط أو الشروط المحددة في الـ array.
            </li>
          </ul>
        </li>
      </ul>
      <h4>Example</h4>
      <p>
        هنستخدم <strong>useEffect</strong> عشان نعرض القيمة المكتوبة في الـ
        input كل ما تتغير.
      </p>
      <InputExample />
    </Container>
  );
};

export { function_UseEffect };
