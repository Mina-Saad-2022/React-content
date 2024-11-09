import React, { useRef } from "react";
import { Button, Form, Row, Col ,Image } from "react-bootstrap";

const SimpleUseRefExample = () => {
  // هنا بنعمل متغير باستخدام useRef عشان نمسك بيه ال input
  const inputRef = useRef(null);

  // هنستخدم الدالة دي عشان نحط التركيز على input لما نضغط على الزرار
  const focusInput = () => {
    inputRef.current.focus(); // .current بترجع لنا العنصر اللي بنشاور عليه
  };

  return (
    <div>
      <Form.Control
        className="w-50"
        type="text"
        ref={inputRef}
        placeholder="Type here..."
      />
      <Button className="m-2" variant="success" onClick={focusInput}>
        Focus on Input
      </Button>{" "}
      {/* عند الضغط هيركز علي input */}
    </div>
  );
};

const function_UseRef = () => {
  return (
    <>
      <div className="container">
        <h2>UseRef</h2>
        <ul>
          <li>
            يعني مرجع والغرض منها انها بتخليني اشاور علي اي عنصر واخد القيمة
            بتاعته referance هي اختصار لكلمة ref كلمة
          </li>
        </ul>
        <Row>
          <Col xs={12} md={8} lg={12}>
            <h4>Example</h4>
            <p>
              input وعايز لما اضغط عليه يوخليني اروح اكتب في ال button مثلا لو
              عندي
            </p>
            <Image
              className="w-50 zoom-image m-2 rounded"
              src="https://i.ibb.co/YtBFvyh/code.png"
            />
          </Col>
        </Row>
      </div>
      <SimpleUseRefExample />
    </>
  );
};

export { function_UseRef };
