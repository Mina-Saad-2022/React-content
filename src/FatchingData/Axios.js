import axios from "axios";

import { Col, Container, Row, Image } from "react-bootstrap";

const Axios = () => {
  return (
    <>
      <Container className="border p-2">
        <Row>
          <Col xl={12}>
            <h3>Fetching data bu use Axios package ... </h3>
          </Col>
          <Col xl={12}>
            <h5>طريقة الاستخدام </h5>
            <ul>
              <ol>
                <li>
                  npm من ال axios اول شئ لازم ننصب ال
                  <br /> <h3 className="text-danger">npm i axios</h3>
                </li>
                <li>
                  import لازم بعد كده اعملها
                  <br />{" "}
                  <Image
                    className="zoom-image mt-2 rounded"
                    src="https://gcdnb.pbrd.co/images/byNTdWOrkmQp.png?o=1"
                  />
                </li>
                <li>
                  useEfect بعد كده لازم زي مقلنا نستخدم ال
                  <br />
                  promise بترجع علي هيئة responsie علشان ال await & async
                  وهستخدم فيها ال variable هعمل useEfect بتاعت ال arrow function
                  وجوا ال
                  <br />
                  response والهي ال data الهستخدمها وهعمل متغير تاني جديد جوا
                  المتغير ده علشان يخزن ال methoud وهشوف ال axios وهنده علي ال
                  <Image
                    className="zoom-image mt-2 rounded"
                    src="https://gcdnb.pbrd.co/images/qoZHFWpAOinh.png?o=1"
                  />
                </li>
                <li>
                  واقدر اعرضها عادي جدا api علشان اخزن البيانات الراجعة من ال
                  useState بعد كده هستخدم ال
                  <Image
                    className="zoom-image mt-2 rounded"
                    src="https://gcdnb.pbrd.co/images/URvs3GLjQFva.png?o=1"
                  />
                </li>
                <li>array map بكل سهولة باستخدم ال data واقدر بعدين اعرض ال
                  
                </li>
              </ol>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Axios };
