import {
  STRENGTH_EASIEST,
  STRENGTH_EASY,
  STRENGTH_MEDIUM,
  STRENGTH_STRONG,
} from '../constants';

export const useCheckStrength = () => password => {
  const length = password.length;
  const hasLetter = /[A-Z]+/i.test(password);
  const hasDigit = /\d/g.test(password);
  const hasSymbol = /\W+/g.test(password);
  const hasPair =
    (hasLetter && hasDigit) ||
    (hasDigit && hasSymbol) ||
    (hasSymbol && hasLetter);
  const hasAll = hasLetter && hasDigit && hasSymbol;

  if (length > 0 && length < 8) {
    return STRENGTH_EASIEST;
  } else if (length >= 8 && !hasPair) {
    return STRENGTH_EASY;
  } else if (hasPair && !hasAll) {
    return STRENGTH_MEDIUM;
  } else if (hasAll) {
    return STRENGTH_STRONG;
  }
};
