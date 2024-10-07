import { Button, Card } from "react-bootstrap";
import { FunOnClick } from "./card";

/* eslint-disable jsx-a11y/img-redundant-alt */
const Props = () => {
  return (
    <div className="container">
      <div className="row">
        <h2>Props :</h2>
        <p className="font_arabic">
          يعني خصائص properties جاية من كلمة props كلمة
          <br />
          pass data 'parameter' between components
        </p>
        <ul className="col">
          <li className="font_arabic">
            خاص بيه component يكون له card فمش من المنطقي ان كل card يعني مثلا
            لو عندي اكتر من
            <br />
            <p>
              <span className="text-danger">props</span> هستخدم ال data فعلشان
              افرق مابين ال
              <br />
              <br />
              العندي cards وفي صفحة تانية عايز اعرض فيها كل ال card عبارة عن
              component هعمل مثال لو عندي
              <br />
              الداتا العندي هي عبارة عن
            </p>
          </li>
        </ul>
        <ul className="d-flex justify-content-evenly">
          <li className="col-3">card id</li>
          <li className="col-3">card title</li>
          <li className="col-3">card discreiption</li>
          <li className="col-3">card photo</li>
        </ul>

        <div className="row">
          <div className="col-8">
            <h6 className="font_arabic ">
              component ال function داخل parameter كـ props{" "}
              <span className="text-danger"> الخطوة 1 : </span>وهي اني بكتب كلمة
            </h6>

            <img
              className="img-fluid zoom-image w-50"
              src="https://i.ibb.co/YTg8x7B/1.png"
              alt="step 1"
            />
          </div>
          <div className="col-8 text-end">
            <h6 className="font_arabic">
              وغيرها title dis images متعيرة زي مثلا ال data في اي props{" "}
              <span className="text-danger">الخطوة 2 : </span>
              وهي اني استدعي كلمة object المتغيرة في data او انا اقدر اخزن ال #
            </h6>
            <div className="image-container">
              <img
                className="img-fluid p-2 zoom-image w-50"
                src="https://c.top4top.io/p_3201ql64s1.png"
                alt="step 2"
              />

              <img
                className="img-fluid zoom-image w-50"
                src="https://k.top4top.io/p_3201gd2tm1.png"
                alt="step 2"
              />
            </div>
          </div>
          <div className="col-8">
            <h6 className="font_arabic">
              object المتغيرة بداخل data{" "}
              <span className="text-danger">الخطوة 3 : </span>
              وهي اني هخزن ال
            </h6>
            <img
              className="img-fluid zoom-image w-50"
              src="https://j.top4top.io/p_3201pte2v1.png"
              alt="step 3"
            />
          </div>
          <div className="col-8 text-end">
            <h6 className="font_arabic">
              card علي كل object علشان اقدر اوزع الداتا الخزنتها في ال map
              function <span className="text-danger"> الخطوة 4: </span>
              وهي اني هستخدم ال{" "}
            </h6>
            <p className="font_arabic">
              object وعلي هيئة return ويكون داخل div لازم يكون بداخل map وال
            </p>

            <p className="font_arabic">parameter بتاخد 2 map function ال </p>
            <ol>
              <li className="font_arabic">
                array بمعني كل قيمة في ال array الاول هو العنصر الحالي اللي
                بتشتغل عليه في الـ parameter ال
              </li>
              <li className="font_arabic">
                array بتاع العنصر وده بيديك رقم مكان العنصر في ال index الثاني
                هو ال parameter ال
              </li>
            </ol>
            <img
              className="img-fluid zoom-image w-50"
              src="https://iili.io/dm4toCB.png"
              alt="step 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const test = (msg) => {
  alert("this is : " + msg);
};

const CardProps = (props) => {
  
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 m-1 ">
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary"  onClick={() => FunOnClick({ onclick: test, title: props.title })}>{props.button}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const FunctionProps = () => {
  return (
    <div className="container">
      <div className="row">
        <br />
        <div className="col-12 mb-4 m-1">
          <h2>functions props</h2>
          <p className="font_arabic">
            function ينفذ الbutton فنا عايز لما اضغط علي ال button فيه card يعني
            مثلا لو عندي ، props لل function وهي اني اباصي
          </p>
        </div>
        <div>
          <p>
          بتاعتي  function الخطوة الاولي : هروح اعمل ال 
          </p>
        </div>
      </div>
    </div>
  );
};
export { CardProps, Props, FunctionProps };
