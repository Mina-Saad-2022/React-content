import { Col, Container, Row, Table } from "react-bootstrap";

const Difference = () => {
  return (
    <Container className="border p-2">
      <Row>
        <Col xl={12}>
          <h3>Axios ومابين استخدم ال Fetch الفرق مابين استخدام ال</h3>
        </Col>
        <Col>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th className="bg-dark text-white">
                  <h3>Fetch</h3>
                </th>
                <th className="bg-dark text-white">
                  <h3>Axios</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>مكتبة مدمجة في المتصفح ولا تحتاج تثبيت</td>
                <td>npm أو yarn مكتبة خارجية تحتاج تثبيتها باستخدام </td>
              </tr>
              <tr>
                <td>يدويا JSON إلي (response) تحتاج لتحويل الاستجابة</td>
                <td>JSON تدعم تحويل الاستجابة تلقائيًا إلى </td>
              </tr>
              <tr>
                <td>فقط promises تستخدم </td>
                <td> بشكل طبيعي promises و async/await تدعم </td>
              </tr>
              <tr>
                <td>لا تدعم إلغاء الطلبات مباشرة</td>
                <td>`CancelToken` تدعم إلغاء الطلبات باستخدام </td>
              </tr>
              <tr>
                <td>لا تعالج الأخطاء في حال كانت الاستجابة غير 200</td>
                <td>تعالج الأخطاء تلقائيًا إذا كانت الاستجابة غير 200</td>
              </tr>
              <tr>
                <td>بسهولة request headers لا تدعم التفاعل مع الـ </td>
                <td>بسهولة request headers تدعم التفاعل مع الـ </td>
              </tr>
              <tr>
                <td>لا يوجد دعم لبرترير الطلبات أو الاستجابة</td>
                <td>
                  يدعم برترير الطلبات والاستجابة للمرونة في التعامل مع الطلبات
                </td>
              </tr>
              <tr>
                <td>لا يدعم الوقت الانتظار مباشرة</td>
                <td>بسهولة (Timeout) يدعم تعيين الوقت الانتظار </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export { Difference };
