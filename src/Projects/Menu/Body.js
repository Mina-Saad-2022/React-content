import { useEffect, useState } from "react";
import { Col, Row, Card, Button, Image } from "react-bootstrap";
import axios from "axios";

const Body = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://6745bf1a512ddbd807f974fc.mockapi.io/menu")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <hr />

      <Row>
        {data.map((item) => {
          return (
            <>
              <Col className="mb-2" xl={4}>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export { Body };
