import { CardProps } from ".";

const Data = [
  {
    title: "Card 1",
    text: "Description card 1",
    button: "button card 1",
  },
  {
    title: "Card 2",
    text: "Description card 2",
    button: "button card 2",
  },
];

const FunctionMap = () => {
  return (
    <div className="row">
      {Data.map((item, index) => (
        <CardProps
          key={index}
          title={item.title}
          text={item.text}
          button={item.button}
        />
      ))}
    </div>
  );
};
const FunOnClick = (props) => {
  props.onclick(props.title);
};
export { FunctionMap ,FunOnClick};
