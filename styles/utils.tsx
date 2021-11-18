import { StyleProps } from '@chakra-ui/react';

export const gridThemeStyler: {
  DARK: Pick<StyleProps, 'bg' | 'color'>;
  LIGHT: Pick<StyleProps, 'bg' | 'color'>;
} = {
  DARK: {
    bg: 'blueGray.800',
    color: 'white',
  },
  LIGHT: {
    bg: 'white',
    color: 'blueGray.800',
  },
};

export default {
  gridThemeStyler,
};
