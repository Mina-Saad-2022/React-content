import React from "react";
import { Button } from "react-bootstrap";

const Title = () => {
  return (
    <h3 className="font_arabic text-center text-decoration-underline p-2">
      قائمة المطلعم
    </h3>
  );
};
const ButtonsHead = () => {
  return (
    <>
      {" "}
      <Button variant="secondary">فطار</Button>
      <Button variant="secondary">غداء</Button>
      <Button variant="secondary">عشاء</Button>
      <Button variant="secondary">الكل</Button>
    </>
  );
};
export { ButtonsHead, Title };
