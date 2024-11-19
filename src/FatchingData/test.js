import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
const Testing = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/", {
      method: "Get",
    })
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <div>
      {state.map((item) => {
       return(
        <Card key={item.id}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.completed}</Card.Text>
        </Card.Body>
      </Card>
       );
      })}
    </div>
  );
};

export { Testing };
