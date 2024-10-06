import { eating, playing, sleeping } from "./promises";

const function_promise = () => {
  return (
    <div>
      <h2>Synchronous</h2>
      <p className="font_arabic">
        هيتنفذوا بالدور وده معناه ان هي مش بتقوم غير بعملية واحدة وبعد function
        يعني طريق واحد يعني لو عندي اكتر من single thread الجافاسكريبت بتستخدم
        متخلص تبداء العملية التانية وهكذا
      </p>
      <ul>
        <li>function 1</li>
        <li>function 2</li>
        <li>function 3</li>
      </ul>
      <p className="font_arabic text-danger bold">
        هنا الدوال دي مش هتتنفذ مع بعض فدالة 3 مش هتتفذ غير لما تتنفذ دالة 2
        ودالة 2 مش هتتنفذ غير لما تتنفذ دالة 1
        <br />
        <span>يعني تزامن synchronous والعملية دي اسمها </span>
      </p>
      <hr />
      <h2>Asynchronous</h2>
      <p>the result in console log </p>
    
    </div>
  );
};

export { function_promise };
