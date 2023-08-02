import { useEffect, useState } from 'react';

import { Label, Input, StrengthIndicator } from '..';
import { useCheckStrength, useStrengthColors } from '../../hooks';

import './password.css';

export const Password = ({ label }) => {
  const [password, setPassword] = useState('');
  const [colors, setColors] = useState(['', '', '']);
  const checkStrength = useCheckStrength();
  const getStrengthColors = useStrengthColors();

  useEffect(() => {
    const strengthName = checkStrength(password);
    const newColors = getStrengthColors(strengthName);
    if (colors.join() !== newColors.join()) {
      setColors(newColors);
    }
  }, [colors, password, checkStrength, getStrengthColors]);

  return (
    <div className="password__container">
      <Label text={label} />
      <Input value={password} onChange={setPassword} />
      <StrengthIndicator colors={colors} />
    </div>
  );
};
