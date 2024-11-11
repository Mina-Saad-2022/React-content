
import React, { createContext } from "react";

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
                انه بيخليني <span className="fw-bold text-success">استدعي</span> قيم usecontext استخدام ال
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
                واقدر اوصلها من اي مكان داخل المشروع database هستدعي قيم موجودة في مكان
                منفصل كانها في ال usecontext فمن خلال ال
              </li>
              <li>وده المكان الهخزن فيه القيم العايز استدعيها <span className="fw-bold text-success">contextApi</span> لازم الاول نعرف ال usecontext علشان اشتغل بال</li>
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
                مابين data وده بيساعد في حل مشكلة نقل ال components دون الحاجة
                الي تمريرها بشكل يدوي الي اكثر من
                <br />
                prop-driling المشروع والبتحصل من خلال ال components ال
              </li>
             
            </ul>
          </Col>
          <Col xs={12} md={8} lg={12}>
            <h3>طريقة الاستخدام</h3>
            <ul>
              <ol>
                <li>
                  contextApi لازم اول شئ اعمل ال
                  <ul>
                    <ol>
                      <li>
                        والمن خلالها هخزن القيم بتاعتي import React عند ال context هنشأ في
                        الاول ال
                        <Image
                className="w-75 zoom-image mt-2 rounded"
                src="https://i.ibb.co/x2Pvf1d/image.png"
              />
                      </li>
                    </ol>
                  </ul>
                </li>
              </ol>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { function_UseContext };
