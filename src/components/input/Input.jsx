import './input.css';

export const Input = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className="input__container">
      <input
        className="input__field"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
