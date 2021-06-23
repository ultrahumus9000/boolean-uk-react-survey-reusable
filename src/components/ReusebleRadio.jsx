export default function ReusebleRadio({ text, key, ...props }) {
  return (
    <li key={key}>
      <input {...props} />
      <label htmlFor={props.id}>{text}</label>
    </li>
  );
}
