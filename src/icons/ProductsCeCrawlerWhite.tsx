import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductsCeCrawlerWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 76" fill="none" ref={svgRef} {...props}>
      <Path
        d="M52.749 29.138a30.28 30.28 0 00-7.33-7.12c-2.62-2-26.87-8.86-26.87-8.86l6.07 18.88s5.93 5.72 15.5.24l2.16-4.08.63-.35c.7 2.27-2.27 11.9-3.46 14.66a14.001 14.001 0 01-3 4.67 4.55 4.55 0 01-3.45 1.48 6.13 6.13 0 01-3.53-1.12c-1.74-1.29-2.4-3.38-3.7-4.71l-3.14-1.17-1.28-7.67-18.75-28.19s-1.46-2 .18-3.46c1.22-1.15 8.93 1 8.93 1l4.05 3.59 3.7-.14s30 4.92 32.59 6a15 15 0 018.23 7.15 88.651 88.651 0 013.35 9l8 16.33-4.5 2.69v-7.68a26.421 26.421 0 00-7.08-.49l-7.3-10.65zM92.659 63.529a5.1 5.1 0 01-1.25 10h-47.69a5.1 5.1 0 01-.93-10.12c.3-.06 12.51-2 12.51-2h26.11s10.85 2.02 11.25 2.12z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M59.349 55.228l7.81-7.29v-7.68c-5.15-1.31-13.46.23-13.46.23-.45 1.68-3.62 11.85-2.59 16.48l8.24-1.74z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M67.158 47.948l13.54-8.13h24.28l2.48.42 2.55 3-1.06 2a32.356 32.356 0 011.86 9.42 3.811 3.811 0 01-.94 2.9h-32.31v4h-19.16v-4h-7.26s0-.21-.07-.52l8.28-1.81 7.81-7.29M58.398 57.518h20.18"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductsCeCrawlerWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
