import React, { useReducer } from "react";

import { Container, Row, Col, Image ,Button} from "react-bootstrap";
const InitialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Function_UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);

 return (
    <>
      <Container>
        <Row>
          <Col xl={12}>
            <h4>UseReducer</h4>
          </Col>
          <Col xl={12}>
            <ul>
              <li>
                <span className="text-success">
                  {" "}
                  <b>
                    {" "}
                    وده الهيوصل الدنيا ببعضها reducer وهي اني هنده علي حاجة
                    اسمها
                  </b>{" "}
                </span>{" "}
                contextApi وال usecontext فكرتها تشبه لحد كبير فكرة ال
                useReducer ال
              </li>
              <li>
                المعقدة states يعني بستخدمها في العمليات او complex state علشان
                useReducer وبستخدم ال
              </li>
              <li>
                reducer ليه أكشن معروف ووظيفة واضحة في state اكتربحيث يكون كل
                تغيير في ال modular بيساعدك ترتب الأكشنز ويخلي الكود reducer ال
              </li>
              <li className="text-danger">
                اللي جاية action بناء علي ال state ودي عبارة عن دالة بتحدد إيه
                اللي هيحصل لل <b>reducer function</b> هي ال usereducer مكونات ال
                <br />
                بناء عليه state وتغير ال action علشان نحدد نوع ال if statements
                او switch statemen بيكون فيها
              </li>
            </ul>
          </Col>
          <Col xl={12}>
            <h4>طريقة الاستخدام</h4>
            <ul>
              <ol>
                <li>
                  0 للي هو عدد بيبدأ من count في الأول، بنحدد الحالة المبدئية
                  اللي هنبدأ بيها. هنا، هنخليها بسيطة، وليكن
                  <br />
                  دي كده أول خطوة، اللي هي تعريف حالة مبدئية ثابتة
                  <br />{" "}
                  <Image
                    className="zoom-image rounded-pill"
                    src="https://gcdnb.pbrd.co/images/2eIItKtdCX3O.png?o=1"
                  />
                </li>
                <li>
                  reducer finction هكتب بعدين ال
                  <br />
                  count هتغير ال actions والبدورها هتحدد ازاي الحالات المختلفة
                  reducer يعني هنعمل دالة الـ <br />
                  هنطرح واحد DECREMENT اسمه action واحد ولو ال count هنزود ال
                  INCREMENT لو الاكشن اسمه مثلا
                  <br />
                  بتعبتر عن الحالة الحالية <b className="text-success">
                    state
                  </b>{" "}
                  في الدالة دي ال علشان <br />
                  تعرف إيه اللي هيتغير. reducer الأكشن اللي بنبعت نوعه لل
                  <b className="text-success"> actions</b> ال
                  <Image
                    className="zoom-image rounded"
                    src="https://gcdnb.pbrd.co/images/XTRTryjs7oCE.png?o=1"
                  />
                </li>
                <li>
                  useReducer استدعي ال
                  <br />
                  <Image
                    className="zoom-image rounded"
                    src="https://gcdnb.pbrd.co/images/lHRhArAyZTR2.png?o=1"
                  />
                </li>
                <li>
                  useReducer هستخدم ال
                  <br />
                  <Image
                    className="zoom-image rounded"
                    src="https://gcdnb.pbrd.co/images/CdkZuBWkuRqJ.png?o=1"
                  />{" "}
                </li>
              </ol>
            </ul>
          </Col>
          <Col xl={12}>
          <Button variant="success" className="m-2 w-25" onClick={() => dispatch({ type: "INCREMENT" })}>
              <h6>+</h6>
            </Button>
            <Button variant="danger" className="m-2 w-25" onClick={() => dispatch({ type: "DECREMENT" })}>
              <h6>-</h6>
            </Button>
          <p>Count: {state.count}</p>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Function_UseReducer };
