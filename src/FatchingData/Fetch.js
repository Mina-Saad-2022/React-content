import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Pagination } from "react-bootstrap";

const Fetching = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // عدد الكروت في الصفحة

  // جلب البيانات من API
  const FetchingData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setPosts(data.slice(0, 30)); // نقيد عدد الكروت بـ 30 فقط
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchingData();
  }, []);

  // حساب الفهرس بداية ونهاية الكروت اللي هتظهر في الصفحة الحالية
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // تغيير الصفحة
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // حساب عدد الصفحات الإجمالي
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <Container>
      <Row>
        {currentPosts.map((post) => (
          <Col key={post.id} md={6} className="mb-4">
            <Card className="m-auto" style={{ width: "18rem", height: "300px" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <p>{post.body}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Pagination className="justify-content-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export { Fetching };
