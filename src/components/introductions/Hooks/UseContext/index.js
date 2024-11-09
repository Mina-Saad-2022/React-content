import React, { useState } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

const function_UseContext = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8} lg={12}>
            <h2>UseConText</h2>
            <p className="text-danger">اللازم هنشتغل بيها hooks من اهم ال </p>
          </Col>
          <Col xs={12} md={8} lg={12}>
          <ul>
            <li>
              انه بيخزن قيم usecontext استخدام ال
              <br />
              وكمان علشان يحل المشاكل الممكن تحصل في المشاريع الكبيرة
              <br />
              login & logout زي مثلا المشاريع الفيها
              <br />
              علشان اعرف هو دخل ولا لا true & flase فمش من المنطقي اني كل شوية
              هروح امرر قيم
              <br />
            </li>
            <li>
              {" "}
              واقدر اوصله من اي مكان داخل المشروعdatabase هخزن قيمة في مكان
              منفصل كانه في ال usecontext فمن خلال ال
            </li>
            <li>contextApi لازم الاول نعرف ال usecontext علشان اشتغل بال</li>
            <li>
              contextApi والهو هيكون context من نوع object ببساطة انها بتاخد
              usecontext وتعريف ال
              <br />
              ولكن بخزن قيمة في مكان منفصل state تعتبر عبارة عن usecontext وال
            </li>

            <li>
              بيسمح بمشاركة قيم في المشروع react هي عبارة عن جزء من ال
              contextApi ال
              <br />
              مابين data وده بيساعد في حل مشكلة نقل ال components دون الحاجة الي
              تمريرها بشكل يدوي الي اكثر من
              <br />
              prop-driling المشروع والبتحصل من خلال ال components ال
            </li>
            <li>
              <h6 className="text-danger">
                الخلاصة يعني في اي مكان بيكون عندي زي مخزن صغير وهيكون
                <br />
                usecontext وبخزن فيه قيم معينة وعلشان اوصل للقيم دي لازم استخدام
                ال contextApi هو ال
              </h6>
            </li>
          </ul>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export { function_UseContext };
