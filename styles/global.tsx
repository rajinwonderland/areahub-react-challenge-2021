import { Global } from '@emotion/react';
import React from 'react';

function Styles() {
  return (
    <Global
      styles={`
        /* latin */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 300 900;
          font-display: optional;
          font-variation-settings: 'slnt' -10;
          src: url(/fonts/inter-var-latin.woff2)
              format('woff2 supports variations'),
            url(/fonts/inter-var-latin.woff2) format('woff2-variations');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 400 900;
          font-display: optional;
          src: url(/fonts/inter-var-latin.woff2)
              format('woff2 supports variations'),
            url(/fonts/inter-var-latin.woff2) format('woff2-variations');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400 900;
          font-display: optional;
          src: url(/fonts/Montserrat-VF.woff2)
              format('woff2 supports variations'),
            url(/fonts/Montserrat-VF.woff2) format('woff2-variations');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        .recharts-text {
          font-family: Inter;
          font-weight: 500;
          font-size: 0.75em;
        }
        .sticky-inner-wrapper {
          box-shadow: var(--areahub-shadows-sm);
        }
        .mapboxgl-ctrl-logo {
          display: none;
        }
        .mapbox-popup-feedback: {
          background: transparent;
        }
        .mapboxgl-popup-content: {
          padding: 0;
          background: transparent !important;
        }
      `}
    />
  );
}
export default Styles;
