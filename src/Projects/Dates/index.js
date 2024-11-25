import React, { useState } from "react";
import { Button, Col, Container, Row, Image, Form } from "react-bootstrap";

const Dates = () => {
  const initialUsers = [
    // مواعيد المستخدمين الأصلية
    {
      id: "1",
      name: "Mina",
      date: "3:00 PM",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "2",
      name: "Ahmed",
      date: "4:00 PM",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "3",
      name: "Mahmoud",
      date: "5:00 PM",
      image: "https://picsum.photos/200/300",
    },
  ];

  const [users, setUsers] = useState(initialUsers); // استخدام المواعيد الأصلية هنا
  const [deletedUsers, setDeletedUsers] = useState([]); // مواعيد المستخدمين المحذوفة
  const [formData, setFormData] = useState({ name: "", date: "" });

  const deleteUsers = () => {
    setDeletedUsers(users); // حفظ المواعيد المحذوفة
    setUsers([]); // مسح المواعيد المعروضة فقط
  };

  const restoreUsers = () => {
    setUsers(deletedUsers); // استعادة المواعيد المحذوفة
    setDeletedUsers([]); // مسح المواعيد المحذوفة
  };

  const formatTime = (timeString) => {
    const date = new Date(`1970-01-01T${timeString}:00`);
    return date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.date) {
      const formattedDate = formatTime(formData.date); // تنسيق الوقت
      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        date: formattedDate, // إضافة الوقت بتنسيق 12 ساعة مع AM/PM
        image: "https://picsum.photos/200/300",
      };
      setUsers([...users, newUser]); // إضافة الموعد في المواعيد المعروضة
      setFormData({ name: "", date: "" });
    }
  };

  return (
    <Container className="p-2 m-auto text-center">
      <Row>
        <Col xl={12} className="text-end">
          <h3 className="p-2">
            لديك اليوم <span>{users.length}</span> مواعيد
          </h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} sm={6} xl={5} className="p-1">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} xl={5} className="p-1">
                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Control
                    type="time"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col xl={2}>
                <Button className="w-100" variant="primary" type="submit">
                  Done
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xl={12} className="body_dates p-2">
          <div className="p-2">
            {users.length ? (
              users.map((item) => (
                <div key={item.id}>
                  <div className="d-flex flex-row-reverse bd-highlight p-2">
                    <div className="d-flex">
                      <Image
                        className="image_user rounded-circle"
                        src={item.image}
                      />
                    </div>
                    <div className="p-2">
                      <h5 className="text-danger">
                        {" "}
                        Name : <span className="text-dark">{item.name}</span>{" "}
                      </h5>
                      <h5 className="text-danger">
                        The clock : <span className="text-dark">{item.date}</span>
                      </h5>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <h3>Excuse me.. There are no appointments today</h3>
            )}
          </div>
        </Col>
        <Col xs={6} xl={6}>
          <Button onClick={restoreUsers} variant="primary" className="w-75">
            View appointments
          </Button>
        </Col>
        <Col xs={6} xl={6}>
          <Button onClick={deleteUsers} variant="danger" className="w-75">
            Clear all
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export { Dates };
