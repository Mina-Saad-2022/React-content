import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Card, Form } from "react-bootstrap";

const API = () => {
  const [data, setData] = useState(null); // لتخزين البيانات من الـ API
  const [city, setCity] = useState("Cairo"); // لتخزين اسم المدينة

  // دالة لجلب البيانات من الـ API
  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f8ee9ca78d5c25459f9c83196f6c7de&units=metric&lang=ar`
    );
    const result = await response.json();
    setData(result); // تخزين البيانات في الـ state
  };

  useEffect(() => {
    fetchData(); // استدعاء الدالة عند تحميل المكون لأول مرة
  }, [city]); // سيتم التحديث عند تغيير المدينة

  return (
    <Container>
      <Row className="p-2">
        <Col xs={12} style={{ fontFamily: "Times New Roman" }}>
          <h2>معلومات الطقس</h2>
        </Col>

        <Col md={5} xs={12}>
          <Form.Select
            id="citySelect"
            onChange={(e) => setCity(e.target.value)} // تغيير المدينة
            className="p-2"
            value={city}
          >
            <option value="Cairo">القاهرة</option>
            <option value="London">لندن</option>
            <option value="New York">نيويورك</option>
            <option value="Tokyo">طوكيو</option>
            {/* أضف المزيد من المدن هنا */}
          </Form.Select>
        </Col>

        <Col md={7} xs={12} className="mt-md-0">
          <Card>
            <Card.Body className="text-center">
              {data ? (
                <>
                  <Card.Title className="text-success">
                    الطقس في {data.name}
                  </Card.Title>
                  <Card.Text className="text-primary">
                    درجة الحرارة: {data.main.temp}°C
                  </Card.Text>
                  <Card.Text className="text-primary">
                    الحالة: {data.weather[0].description}
                  </Card.Text>
                  <Card.Text className="text-primary">
                    الرطوبة: {data.main.humidity}%
                  </Card.Text>
                  <Card.Text className="text-primary">
                    سرعة الرياح: {data.wind.speed} م/ث
                  </Card.Text>
                </>
              ) : (
                <p>جاري التحميل...</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export { API };
