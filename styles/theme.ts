import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { CardComponent } from './additions/card/Card';
import { CardBodyComponent } from './additions/card/CardBody';
import { CardHeaderComponent } from './additions/card/CardHeader';
import { MainPanelComponent } from './additions/layout/MainPanel';
import { PanelContainerComponent } from './additions/layout/PanelContainer';
import { PanelContentComponent } from './additions/layout/PanelContent';
import { buttonStyles } from './components/button';
import { colors, fonts, mdx, sizes, textStyles } from './foundations';

export const breakpoints = createBreakpoints({
  sm: '30rem',
  md: '48rem',
  lg: '62rem',
  xl: '80rem',
  '2xl': '96rem',
  jaegar: '100rem',
  kong: '105rem',
  zilla: '120rem',
  ghidorah: '160rem',
});

export const theme = extendTheme(
  {
    config: {
      cssVarPrefix: 'areahub',
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    colors: {
      ...colors,
      wildfires: colors.red,
      primary: colors.blue,
    },
    fonts,
    breakpoints,
    sizes,
    textStyles,
    mdx,
    landing: {
      h3: {
        mt: '4',
        fontWeight: 'semibold',
        fontSize: '1.25rem',
        letterSpacing: '-.025em',
        color: 'text',
      },
    },

    previewPost: {
      link: {
        cursor: 'pointer',
        color: 'indigo.200',
        fontWeight: 'semibold',
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        _hover: {
          color: 'indigo.50',
          textDecoration: 'underline',
        },
      },
      li: {
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'semibold',
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        _hover: {
          color: 'indigo.200',
        },
      },
    },
  },
  buttonStyles, // Button styles
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
);

export default theme;
