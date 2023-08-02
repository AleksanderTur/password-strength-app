import { ColorBar } from '..';

import './strength-indicator.css';

export const StrengthIndicator = ({ colors }) => (
  <div className="strength-indicator__container">
    {colors.map((color, index) => (
      <ColorBar key={index} color={color} />
    ))}
  </div>
);
