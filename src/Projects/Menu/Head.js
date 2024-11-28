import React from "react";
import { Button } from "react-bootstrap";

const ButtonsHead = ({ filterdata, activeCategory }) => {
  const onFilter = (category) => {
    filterdata(category);
  };
  const getButtonClass = (category) => {
    return activeCategory === category ? "btn-success" : "btn-secondary"; // تغيير الخلفية
  };
  return (
    <>
      <Button
        onClick={() => onFilter("breakfast")}
        className={`w-25 m-1 ${getButtonClass("breakfast")}`}
         
      >
        Breakfast
      </Button>
      <Button
        onClick={() => onFilter("lunch")}
        className={`w-25 m-1 ${getButtonClass("lunch")}`}
         
      >
        Lunch
      </Button>
      <Button
        onClick={() => onFilter("dinner")}
        className={`w-25 m-1 ${getButtonClass("dinner")}`}
       
      >
        Dinner
      </Button>
      <Button
        onClick={() => filterdata("all")}
        className={`w-25 m-1 ${getButtonClass("all")}`}
         
      >
        All
      </Button>
    </>
  );
};

const Title = () => {
  return (
    <h3 className="font_arabic text-center text-decoration-underline p-2">
      Restaurant Menu
    </h3>
  );
};

export { ButtonsHead, Title };
