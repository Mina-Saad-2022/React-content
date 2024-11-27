// import React from "react";
// import { Button } from "react-bootstrap";

// const Title = () => {
//   return (
//     <h3 className="font_arabic text-center text-decoration-underline p-2">
//       Restaurant Menu
//     </h3>
//   );
// };
// const ButtonsHead = ({ filterdata }) => {
//   const Onfilter = (cat) => {
//     filterdata(cat);
//   };
//   return (
//     <>
//       {" "}
//       <Button
//         onClick={() => {
//           Onfilter("breakfast");
//         }}
//         className="w-25 m-1"
//         variant="secondary"
//       >
//         Breakfast
//       </Button>
//       <Button
//         onClick={() => {
//           Onfilter("lunch");
//         }}
//         className="w-25 m-1"
//         variant="secondary"
//       >
//         Lunch
//       </Button>
//       <Button
//         onClick={() => {
//           Onfilter("dinner");
//         }}
//         className="w-25 m-1"
//         variant="secondary"
//       >
//         Dinner
//       </Button>
//       <Button
//         onClick={() => filterdata("all")}
//         className="w-25 m-1"
//         variant="secondary"
//       >
//         All
//       </Button>
//     </>
//   );
// };
// export { ButtonsHead, Title };
import React from "react";
import { Button } from "react-bootstrap";

const ButtonsHead = ({ filterdata }) => {
  const onFilter = (category) => {
    filterdata(category);
  };

  return (
    <>
      <Button onClick={() => onFilter("breakfast")} className="w-25 m-1" variant="secondary">
        Breakfast
      </Button>
      <Button onClick={() => onFilter("lunch")} className="w-25 m-1" variant="secondary">
        Lunch
      </Button>
      <Button onClick={() => onFilter("dinner")} className="w-25 m-1" variant="secondary">
        Dinner
      </Button>
      <Button onClick={() => filterdata("all")} className="w-25 m-1" variant="secondary">
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
