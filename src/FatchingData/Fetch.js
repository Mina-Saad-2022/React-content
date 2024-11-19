import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Pagination, Image } from "react-bootstrap";

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
        <Col xl={12}>
          <h3>Fetching data bu use function fetch ... </h3>
        </Col>

        <Col xl={12}>
          <p>
            او من اي مكان تاني data bage online او من APIجيالي من ال data
            المقصود بيها هي ان ال Fetch كلمة{" "}
          </p>
          <h4 className="text-primary font-weight-bold text-decoration-underline">
            Get ياما Post ياما هتكون data كمان نوع ال{" "}
          </h4>
          <p>
            <span className="text-danger">Axios</span> او عن طريق ال{" "}
            <span className="text-danger">Fetch</span> عن طريق حاجتين اما عن
            طريق data اقدر اجيب ال{" "}
          </p>
          <ul>
            <ol>
              <li>javascript هي دالة موجودة جوا ال Fetch ال</li>
              <li>
                promise وهي بترجعلي في الاخر backend هي مكتبة بنخليني اتصل باي
                Axios ال
              </li>
            </ol>
          </ul>
          <h3>Fetch طريقة استخدام دالة ال </h3>
          <Container className="border p-2 mb-1">
            <Row>
              <Col xl={12}>
                <h6>
                  علشان دي بتتنفذ لاول مرة useEffect اننا نعرضها في API بتاعتنا
                  من dataملحوظة هامة : يفضل لو هنعرض ال
                </h6>
              </Col>
              <Col xl={12}>
                <ul>
                  <ol>
                    <li>
                      dependency والتاني arrow function ودي زي محنا عارفين
                      بتتكون من قسيم وهما الاول عبارة عن useEffect اول حاجة
                      هنستخدم ال
                      <Image
                        className="zoom-image mt-2 rounded"
                        src="https://gcdnb.pbrd.co/images/Cqtnj6p8FMVa.png?o=1"
                      />{" "}
                    </li>
                    <li>
                      API ال url والفيها هنكتب fetch هنكتب دالة ال useEfect
                      العملناها في ال arrow function بعد كده في ال
                      <br />
                      Get ولا هستقبل داتا وفي الحالة دي هتكون Post هل انا هبعت
                      داتا ففي الحالة دي هتكون methoud تاني زي مثلا ال parameter
                      وفيه اكتر من
                      <br />
                      then 2 بعدين هكتب
                      <ul>
                        <ol>
                          <li>
                            json بالكامل وهحدد اني بس عايز ال response الاولي
                            علشان اجيب ال
                          </li>
                          <li>
                            useetate التاينة الموجودة في ال value ودي الهتكون
                            عبارة عن ال json التانية علشان ترجعلي الداتا النا
                            عايزها وبرضه هحدد ال
                          </li>
                        </ol>
                        <li>
                          التانية then التانية والهي متخزنة في ال value فاضية
                          وبعدين هبداء استعمل ال array الهتكون عبارة عن useState
                          بعد كده هستخهدم ال
                        </li>
                      </ul>
                      <Image
                        className="zoom-image mt-2 rounded"
                        src="https://gcdnb.pbrd.co/images/FZFW4la2ExKb.png?o=1"
                      />{" "}
                    </li>

                    <li>
                      ايضاً return وبداخلها return تكون داخل array map وطبعا
                      لازم ال array map بتاعتي هستخدم ال data بعد كده علشان اعرض
                      ال
                      <Image
                        className="zoom-image mt-2 rounded"
                        src="https://gcdnb.pbrd.co/images/oox763UGEEgq.png?o=1"
                      />{" "}
                    </li>
                  </ol>
                </ul>
              </Col>
            </Row>
          </Container>
        </Col>
        {currentPosts.map((post) => (
          <Col key={post.id} md={6} className="mb-4">
            <Card
              className="m-auto"
              style={{ width: "18rem", height: "300px" }}
            >
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
