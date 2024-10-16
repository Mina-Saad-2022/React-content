const Events = () => {
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-3 m-auto border">
          <h2>Events </h2>
          <p className="font_arabic">ومعناها حدث واشهر 3 احداث عندنا هم :</p>
          <ul>
            <li className="font_arabic">
              <span className="text-danger">OnChange</span> <br />
              search input علشان ادور ع حاجة
              <hr />
            </li>
            <li className="font_arabic">
              <span className="text-danger">OnClick</span> <br />
              button اكشن يتنفذ لما اضفط ع
              <hr />
            </li>
            <li className="font_arabic">
              <span className="text-danger">OnSubmit</span> <br />
              يتنفذ form لو عايز اكشن الـ
            </li>
          </ul>
        </div>

        <div className="col-3 m-auto border">
          <h2>Handelers</h2>
          <p className="font_arabic">
          event هو الدالة البتتنفذ ال  </p>
        </div>

        <div className="col-3 m-auto border">
          <h2>User input</h2>
        </div>
      </div>
    </div>
  );
};

export { Events };
