export default function ReusebleCheckbox({ children = "lol", ...props }) {
  return (
    <label>
      <input {...props} />
      {children}
    </label>
  );
}
