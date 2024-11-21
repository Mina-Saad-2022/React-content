import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Pagination, Image } from "react-bootstrap";

const Axios = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        // تحديد أول 30 عنصر فقط
        setData(response.data.slice(0, 30));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // حساب الفهرس بداية ونهاية الكروت اللي هتظهر في الصفحة الحالية
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // تغيير الصفحة
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // حساب عدد الصفحات الإجمالي
  const totalPages = Math.ceil(data.length / postsPerPage);

  return (
    <Container className="border p-2">
      <Row>
        <Col xl={12}>
          <h3>Fetching data using Axios package ... </h3>
        </Col>
        <Col xl={12}>
          <h5>طريقة الاستخدام </h5>
          <ul>
            <ol>
              <li>
                npm من ال axios اول شئ لازم ننصب ال
                <br /> <h1 className="text-danger">npm i axios</h1>
              </li>
              <li>
                import لازم بعد كده اعملها
                <br />{" "}
                <Image
                  className="zoom-image mt-2 rounded"
                  src="https://gcdnb.pbrd.co/images/byNTdWOrkmQp.png?o=1"
                />
              </li>
              <li>
                useEfect بعد كده لازم زي مقلنا نستخدم ال
                <br />
                promise بترجع علي هيئة responsie علشان ال await & async وهستخدم
                فيها ال variable هعمل useEfect بتاعت ال arrow function وجوا ال
                <br />
                response والهي ال data الهستخدمها وهعمل متغير تاني جديد جوا
                المتغير ده علشان يخزن ال methoud وهشوف ال axios وهنده علي ال
                <Image
                  className="zoom-image mt-2 rounded"
                  src="https://gcdnb.pbrd.co/images/qoZHFWpAOinh.png?o=1"
                />
              </li>
              <li>
                واقدر اعرضها عادي جدا api علشان اخزن البيانات الراجعة من ال
                useState بعد كده هستخدم ال
                <br />
                علشان نقدر نعرض البيانات دي state وفيه ال response واخزن فيها
                المتغير التاني بتاع ال useState ولازم استدعي القيمة التانية من
                <br />
                API من ال data بتاعتي البتجيب ال function في الكومبوننت بتاعنا
                ونتفاعل ولازم بعد كده اشغل ال
                <br />
                <ul>
                  <li className="text-danger">
                    API زي جلب البيانات من (asynchronous) في الكود له هدف رئيسي
                    وهو تسهيل التعامل مع العمليات غير المتزامنة async و await
                    استخدام
                  </li>
                </ul>
                <Image
                  className="zoom-image mt-2 rounded"
                  src="https://i.ibb.co/9ZcWYHF/image.png"
                />
              </li>
              <li>array map بكل سهولة باستخدم ال data واقدر بعدين اعرض ال</li>
            </ol>
          </ul>
        </Col>
        {/* عرض البيانات */}
        {currentPosts.map((item) => (
          <Col xl={4} key={item.id}>
            <Card style={{ height: "125px" }} className="m-2">
              <Card.Body>
                <Card.Title>{item.id}</Card.Title>
                <Card.Text>
                  <p>{item.title || "No title available"}</p>
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

export { Axios };
