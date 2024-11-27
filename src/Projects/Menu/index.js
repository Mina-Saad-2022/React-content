// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { NavbarPart } from "./navbar";
// import { ButtonsHead, Title } from "./Head";
// import { Body } from "./Body";
// import { Footer } from "./Footer";
// const Menu = () => {
//   return (
//     <>
//     <Container className="  bg-body-tertiary">
//       <Row>
//         <Col  className="p-0" xs={12}>
//           <NavbarPart />
//         </Col>
//         <Col xs={12}>
//           <Title />
//         </Col>
//         <Col className="font_arabic d-flex justify-content-evenly p-2" xs={12}>
//           <ButtonsHead />
//         </Col>
//         <Col >
//           <Body />
//         </Col>
        
//       </Row>       
//     </Container>
//     <Footer />
//     </>
//   );
  
// };

// export { Menu };

import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavbarPart } from "./navbar";
import { ButtonsHead, Title } from "./Head";
import { Body } from "./Body";
import { Footer } from "./Footer";
import axios from "axios";

const Menu = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6745bf1a512ddbd807f974fc.mockapi.io/menu")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // عرض البيانات كاملة في البداية
      })
      .catch((error) => console.log(error));
  }, []);

  const filterData = (category) => {
    const filtered = category === "all" ? data : data.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  return (
    <>
      <Container className="bg-body-tertiary">
        <Row>
          <Col className="p-0" xs={12}>
            <NavbarPart />
          </Col>
          <Col xs={12}>
            <Title />
          </Col>
          <Col className="font_arabic d-flex justify-content-evenly p-2" xs={12}>
            <ButtonsHead filterdata={filterData} />
          </Col>
          <Col>
            <Body data={filteredData} /> {/* تمرير البيانات المفلترة */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export { Menu };
