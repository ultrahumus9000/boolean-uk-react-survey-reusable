import ReusebleCheckbox from "./ReusebleCheckbox";

export default function CheckBox({ props }) {
  return (
    <ul>
      {props.map((features, index) => {
        return (
          <li key={index}>
            <ReusebleCheckbox
              name={features.name}
              type={features.type}
              value={features.value}
            >
              {" "}
              {features.text}{" "}
            </ReusebleCheckbox>
          </li>
        );
      })}
    </ul>
  );
}
