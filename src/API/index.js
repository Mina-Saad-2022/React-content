import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Card, Form } from 'react-bootstrap';

const API = () => {
  const [data, setData] = useState(null); // لتخزين البيانات من الـ API
  const [selectedProduct, setSelectedProduct] = useState(null); // لتخزين المنتج المختار

  // دالة لجلب البيانات من الـ API
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products/");
    const result = await response.json();
    setData(result.products); // تخزين البيانات في الـ state
    setSelectedProduct(result.products[0]); // تخزين أول منتج كمنتج افتراضي
  };

  useEffect(() => {
    fetchData(); // استدعاء الدالة عند تحميل المكون لأول مرة
  }, []);

  // دالة لتحديث المنتج بناءً على الاختيار
  const handleProductChange = (selectedId) => {
    const product = data.find((item) => item.id == selectedId);
    setSelectedProduct(product); // تحديث الـ state بالمنتج المختار
  };

  return (
    <Container className="mt-5">
      <Row className="p-2 border">
        <Col xs={12} style={{ fontFamily: 'Times New Roman' }}>
          <h2>API التعامل مع</h2>
        </Col>

        <Col md={5} xs={12}>
          <Form.Select
            id="brandSelect"
            onChange={(e) => handleProductChange(e.target.value)}
            className="p-2"
          >
            {data && data.map((product) => (
              <option key={product.id} value={product.id}>{product.brand}</option>
            ))}
          </Form.Select>
        </Col>

        <Col md={7} xs={12} className=" mt-md-0">
          <Card className="">
            <div className="w-100 overflow-hidden text-center p-1 " style={{ height: '200px' }}>
              {selectedProduct && (
                <Image src={selectedProduct.images[0]} className="p-2 m-auto w-25 h-75" alt="Card image cap" roundedCircle/>
              )}
            </div>
            <Card.Body className="text-center">
              <Card.Title className="text-success">
                {selectedProduct ? selectedProduct.brand : "Loading..."}
              </Card.Title>
              <Card.Text className="text-primary">
                {selectedProduct ? selectedProduct.description : "Loading..."}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export { API };
