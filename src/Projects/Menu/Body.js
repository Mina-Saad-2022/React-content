// import { useEffect, useState } from "react";
// import { Col, Row, Card, Button, Image } from "react-bootstrap";
// import axios from "axios";

// const Body = () => {
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://6745bf1a512ddbd807f974fc.mockapi.io/menu")
//       .then((response) => {
//         setdata(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
//   return (
//     <>
//       <hr />

//       <Row>
//         {data.length >= 1 ? (
//           data.map((item) => {
//             return (
//               <>
//                 <Col className="mb-2" xl={4}>
//                   <Card>
//                     <Card.Img
//                       className=" image_card"
//                       variant="top"
//                       src="https://i.postimg.cc/XJzksjGs/photo-1681072530653-db8fe2538631.jpg"
//                     />
//                     <Card.Body>
//                       <Card.Title className=" text-center">
//                         {item.name}
//                       </Card.Title>
//                       <Card.Text>
//                         <h5 className="text-danger">
//                           category : {item.category}
//                         </h5>
//                       </Card.Text>
//                       <Card.Text>{item.description} </Card.Text>
//                       <Button className="w-100" variant="primary">
//                         Go somewhere
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               </>
//             );
//           })
//         ) : (
//           <h1 className="text-center font_arabic">
//             {" "}
//             Excuse me... There is no data{" "}
//           </h1>
//         )}
//       </Row>
//     </>
//   );
// };

// export { Body };

import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Body = ({ data }) => {
  return (
    <Row>
      {data.map((item) => (
        <Col className="mb-2" xl={4} key={item.id}>
          <Card>
            <Card.Img
              className="image_card"
              variant="top"
              src="https://i.postimg.cc/XJzksjGs/photo-1681072530653-db8fe2538631.jpg"
            />
            <Card.Body>
              <Card.Title className="text-center">{item.name}</Card.Title>
              <Card.Text>
                <h5 className="text-danger">Category: {item.category}</h5>
              </Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <h5 className="text-danger">price: {item.price} $</h5>
              </Card.Text>
              <Button className="w-100" variant="primary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export { Body };
