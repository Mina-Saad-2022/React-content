import React, { useMemo, useState } from "react";

import { Button, Container, Row, Col, Image } from "react-bootstrap";
const Function_UseMemo = () => {
  const test = () => {
    window.Swal.fire({
      html: `
      [1,2,3]
      <br/>
 علشان مثلا ازود ع المجموع رقم 1  في كل ضغطة   usestate فدول لو هستخدم ال
 انه الاول بيجمع 1+2+3 = 6 usestate فالبيعمله لما بستخدم ال 
  <br/>
7 =  وبيبداء يضيف عليها 1 فيصبح المجموع  1+2+3+1 
<br/>
 ولما اضغط مرة تاني يرجع يعيد نفس الموضوع من البداية   
 <hr/>
 <span class='text-primary'>
 بتعمل العملية دي مرة واحدة في اول ضغطة usememo لكن لو هستخدم ال </span>
 <br/>
  1+2+3 = 6
  <br/>
   ولو ضغط مرة تانية بيحسبها كده 

7 = + 1 
 <br/>
مش بيعيدها من البداية لا هو بيحسبها من اخر لما وقف
 `,
    });
  };
  const showAlert = () => {
    // هنا بنستخدم sweetalert لعرض رسالة
    // window.Swal.fire("useState عن استخدام ال  useMemo هو احنا ليه هنفضل استخدام ال ");
    window.Swal.fire({
      title: "<strong>سؤال مهم</strong>",
      icon: "info",
      html: `
       <b class='text-primary'>useMemo</b>  هو احنا ليه هنفضل استخدام الـ,
        <br/>
       <b class='text-primary'>useState</b> عن استخدام الـ
      `,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: `
        <i  class="fa fa-thumbs-up w-50"></i> الإجابة
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down",
      // هنا بنضيف الـ onClick سعلى الزر
      preConfirm: test,
    });
  };
  const [count, setCount] = useState(0); //first parameter
  const [numbers, setNumbers] = useState([0]); // second parameter

  // بنستخدم useMemo عشان نحسب المجموع مرة واحدة لو
  const total = useMemo(() => {
    // 0 والهو حاليا  array علشان نجمع المجموع الموجود في ال reduce بنستخدم دالة
    //   numbers.reduce(...):
    // 	reduce بتتنفذ على الـ array numbers.
    // 	كل عنصر جوه numbers هيتم معالجته واحدة واحدة عشان نجيب النتيجة النهائية.
    //   (acc, curr) => acc + curr:
    // 	 callback function  اللي بتستدعيه ده هو الـreduce لكل عنصر.
    // 	 بيمثل النتيجة المتجمعة لحد دلوقتي. : (اللي هو accumulator)  acc
    // 	 بيمثل العنصر الحالي اللي reduce بتتعامل معاه. : (اللي هو current) curr
    // 	(acc) على القيمة المتجمعة (curr) بيجمع القيمة الحالية  acc + curr في الحالة دي،
    // numbers يعني بنبدأ من الصفر، ونضيف عليه كل العناصر اللي في  accumulator	هنا 0 هو قيمة البداية للـ
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);

  return (
    <>
      <Container>
        <h2>UseMemo</h2>
        <Row>
          <Col xl={12}>
            <ul>
              <li>
                يعني ذكريات او تخزين وفائدتها انها بتخزن قيم ولكن بشروط memoris
                هي اختصار لكلمة memo مبدئيا كلمة
              </li>
              <li>
                كبيرة array علي map او ال filter بنستخدمها علشان نحسن الأداء لما
                نكون عندنا عمليات حسابية تقيلة زي ال
                <br />
                او بيانات كتير تتعملها معالجة، وعايزين ما تتنفذش العملية دي غير
                لما فعلاً يكون في تغيير في المدخلات اللي معتمدين عليها.
              </li>
              <li>
                إلا لو المدخلات فعلاً اتغيرت. component للـ render الهدف الأساسي
                هو تجنب إعادة حساب الحاجة دي كل مرة يتعمل فيها
              </li>
            </ul>
          </Col>
          <Col xl={12}>
            <h4>طريقة الاستخدام</h4>
            <ul>
              <ol>
                <li>
                  react عند ال component لازم طبعا استدعيها في بداية ال
                  <h6>
                    <span className="text-success">2 parameter</span> بتاخد
                    usememo وللتذكير ال{" "}
                  </h6>
                  اقدر اقول ان ممكن واحد فيهم مش يكون ليه اي تاثير بمعني ملهوش
                  دور وممكن الاتنين يكون ليهم ادوار او تاثيرات مختلفة عن بعض
                </li>
                <br />
                <Image
                  className="zoom-image rounded"
                  src="https://gcdnb.pbrd.co/images/mwr4trokptc9.png?o=1"
                />
              </ol>
            </ul>
          </Col>
          <Col xl={12}>
            <h3>Example :</h3>{" "}
            <p>parameter كل واحد فيهم بيمثل buttons 2 هيكون عندي</p>
            <p>
              وكل البيعمله انه عبارة عن عداد بيزود 1case الاول مش هيكون له تاثير
              علي ال parameter ال
              <br />
              الثاني فالهيعمله انه هيزود 10 في كل ضغطة parameter اما ال
            </p>
            <br />
            <Image
              className="zoom-image rounded"
              src="https://gcdnb.pbrd.co/images/Izrazm2EoYmy.png?o=1"
            />
            <br /> <br />
            <Image
              className="zoom-image rounded"
              src="https://gcdnb.pbrd.co/images/mksvWOn6FwhO.png?o=1"
            />
          </Col>

          <Col xl={12}>
            <h3>Calculating total: {total}</h3>
            <Button
              variant="secondary"
              className="m-2"
              onClick={() => setCount(count + 1)}
            >
              Increment Count : {count}
            </Button>
            <Button
              variant="secondary"
              className="m-2"
              onClick={() => setNumbers([...numbers, 10])}
            >
              Add Number
            </Button>
            <Button variant="danger" className="m-2" onClick={showAlert}>
              <b> سؤال مهم جداً</b>{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Function_UseMemo };
