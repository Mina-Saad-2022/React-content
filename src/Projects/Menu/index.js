import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavbarPart } from "./navbar"; // تأكد من أنك عامل import للـ Navbar
import { ButtonsHead, Title } from "./Head";
import { Body } from "./Body";
import { Footer } from "./Footer"; // تأكد من أنك عامل import للـ Footer
import axios from "axios";

const Menu = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [itemCount, setItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // النص المكتوب في البحث
  const [likeCount, setLikeCount] = useState(0); // عدد الإعجابات التراكمي

  useEffect(() => {
    axios
      .get("https://6745bf1a512ddbd807f974fc.mockapi.io/menu")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
        setItemCount(response.data.length);
      })
      .catch((error) => console.log(error));
  }, []);

  // Filter data by category
  const filterData = (category) => {
    const filtered =
      category === "all" ? data : data.filter((item) => item.category === category);
    setFilteredData(filtered);
    setActiveCategory(category);
  };

  // Handle like button click
  const toggleLike = (id) => {
    setLikeCount((prevCount) => prevCount + 1); // زيادة العدد عند كل إعجاب
  };

  return (
    <>
      <Container className="bg-body-tertiary">
        <Row>
          <Col className="p-0" xs={12}>
            <NavbarPart setSearchQuery={setSearchQuery} /> {/* تمرير setSearchQuery هنا */}
          </Col>
          <Col xs={12}>
            <Title likeCount={likeCount} />
          </Col>
          <Col className="font_arabic d-flex justify-content-evenly p-2" xs={12}>
            <ButtonsHead filterdata={filterData} activeCategory={activeCategory} />
          </Col>
          <Col>
            <Body
              data={filteredData} // تمرير البيانات المفلترة
              setSearchQuery={setSearchQuery} // تمرير دالة لتحديث النص
              searchQuery={searchQuery} // تمرير النص المدخل
              toggleLike={toggleLike} // تمرير دالة الإعجاب
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export { Menu };
