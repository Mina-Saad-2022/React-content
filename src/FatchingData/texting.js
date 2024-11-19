import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Fetch_Axios = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setData(response.data);
    };
    Fetch_Axios();
  }, []);
  return (
    <Container className="border p-2">
      <Row>
        {data.map((post) => {
          return (
            <Col xl={3}>
              <Card key={post.id} style={{ height: "125px" }} className="m-2">
                <Card.Body>
                  <Card.Title>{post.id}</Card.Title>
                  <Card.Text>
                    <p>{post.title}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export { Test };
