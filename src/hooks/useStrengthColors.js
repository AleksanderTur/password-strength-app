import {
  STRENGTH_EASIEST,
  STRENGTH_EASY,
  STRENGTH_MEDIUM,
  STRENGTH_STRONG,
  COLOR_RED,
  COLOR_YELLOW,
  COLOR_GREEN,
} from '../constants';

export const useStrengthColors = () => strengthName => {
  switch (strengthName) {
    case STRENGTH_EASIEST:
      return [COLOR_RED, COLOR_RED, COLOR_RED];
    case STRENGTH_EASY:
      return [COLOR_RED, '', ''];
    case STRENGTH_MEDIUM:
      return [COLOR_YELLOW, COLOR_YELLOW, ''];
    case STRENGTH_STRONG:
      return [COLOR_GREEN, COLOR_GREEN, COLOR_GREEN];
    default:
      return ['', '', ''];
  }
};
