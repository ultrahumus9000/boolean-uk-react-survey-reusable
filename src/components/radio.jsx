import ReusebleRadio from "./ReusebleRadio";

export default function RadioList({ props }) {
  return (
    <ul>
      {props.map((item, index) => {
        return (
          <ReusebleRadio
            key={index}
            id={item.id}
            type="radio"
            name={item.name}
            value={item.value}
            text={item.value}
          />
        );
      })}
    </ul>
  );
}
