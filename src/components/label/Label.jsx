import './label.css';

export const Label = ({ text }) =>
  text && (
    <div className="label__container">
      <span className="label__text">{text}</span>
    </div>
  );
