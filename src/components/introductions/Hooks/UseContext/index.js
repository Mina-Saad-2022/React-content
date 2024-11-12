import React, { useContext } from "react";

import { Image, Container, Row, Col } from "react-bootstrap";
import { newContext } from "./ContextApi/MyContext";

const FunctionUseContext = () => {
  // استخدام context
  const myContext = useContext(newContext);

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
                انه بيخليني <span className="fw-bold text-success">استدعي</span>{" "}
                قيم usecontext استخدام ال
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
                واقدر اوصلها من اي مكان داخل المشروع database هستدعي قيم موجودة
                في مكان منفصل كانها في ال usecontext فمن خلال ال
              </li>
              <li>
                وده المكان الهخزن فيه القيم العايز استدعيها{" "}
                <span className="fw-bold text-success">contextApi</span> لازم
                الاول نعرف ال usecontext علشان اشتغل بال
              </li>
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
                        والمن خلالها هخزن القيم بتاعتي import React عند ال
                        context هستدعي في الاول ال
                        <Image
                          className="zoom-image mt-2 rounded"
                          src="https://gcdnb.pbrd.co/images/VtUtG9tCZnoz.png?o=1"
                        />
                      </li>
                      <li>
                        newContext وهسميه اي اسم زي منا عايز وهسميه مثلا context
                        هنشأ ال
                        <Image
                          className="zoom-image mt-2 rounded"
                          src="https://gcdnb.pbrd.co/images/l9YUmezHykTl.png?o=1"
                        />
                      </li>
                      <li>
                        وهستدعي فيه اي كلمة arrow function بتاعي علي هيئة
                        contextApi بتاع ال component بعدين هعمل ال
                        <br />
                        <span className="text-danger">children</span> وهسميها
                        مثلا كلمة component هتكون وظيفتها انها كوسيط علشان اقدر
                        امرر الداتا العايزها لاي
                        <br />
                        <span className="text-danger">value=" " </span> و{" "}
                        <span className="text-danger">.Provider </span>{" "}
                        وفيهاهستخدم حاجتين مهمين جدا
                        <Image
                          className="zoom-image mt-2 rounded"
                          src="https://gcdnb.pbrd.co/images/s85WBwIFGKwZ.png?o=1"
                        />
                      </li>
                      <li>
                        export لازم بعد كده اعمل
                        <br />{" "}
                        <Image
                          className="zoom-image mt-2 rounded"
                          src="https://gcdnb.pbrd.co/images/buLVaKVF5JiX.png?o=1"
                        />
                      </li>
                    </ol>
                  </ul>
                </li>
                <li>
                  useContext hook بتاعتي عن طريق استخدم Context بعد كده هروح
                  لصفحة الوسيط علشان استخدم ال
                  <br />
                  <Image
                    className="zoom-image mt-2 rounded"
                    src="https://gcdnb.pbrd.co/images/nihOkKAH0KTb.png?o=1"
                  />
                </li>
                <li>
                  value النا حافظها في ال data بتاعتي في اني استدعي ال
                  useContext بعدين هستخدم ال
                  <Image
                    className="zoom-image mt-2 rounded"
                    src="https://gcdnb.pbrd.co/images/a9Dx20FGrpCy.png?o=1"
                  />
                </li>
                <li>
                  ContextApi عند استدعاء صفحة الوسيط لازم تكون مابين
                  <Image
                    className="zoom-image mt-2 rounded"
                    src="https://gcdnb.pbrd.co/images/o9Ym0VNeKvlW.png?o=1"
                  />
                </li>
              </ol>
            </ul>
          </Col>
          <Col xs={12} md={8} lg={12}>
            <h4>شرح الفكرة باختصار </h4>
            <Image
              className="zoom-image mt-2 rounded"
              src="https://gcdnb.pbrd.co/images/YZF8CpvoDRLF.png?o=1"
            />
          </Col>
          <Col xs={12} md={8} lg={12}>
            <h2>the result : <span className="text-success">{myContext}</span> </h2>
            {/* <h5>{myContext.age}</h5> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { FunctionUseContext };
