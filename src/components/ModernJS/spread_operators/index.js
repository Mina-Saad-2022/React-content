import { add_data, data, Origin, spread } from "./spread_operators";
const { id, name } = data();
const { age } = add_data();
const function_spread_operators = () => {
  return (
    <div>
      <h2>Spread operators</h2>

      <p className="font_arabic">
        داخل حاجة تانية، زي دالة أو مصفوفة جديدة object او array تستخدمها عشان
        توسع أو تفرد او تضيف محتويات
      </p>
      <ul>
        <li>the number Origin is : {Origin()}</li>
        <ol className="text-danger">
          the spread operators is Adding other data to the original content{" "}
          {spread()}
        </ol>
        <li>
          I can use it within the object to add to existing data or modify it
        </li>
        <ol>ID :{id}</ol>
        <ol>Name : {name}</ol>
        <ol className="text-danger">the new data is Age : {age}</ol>
      </ul>
    </div>
  );
};

export { function_spread_operators };
