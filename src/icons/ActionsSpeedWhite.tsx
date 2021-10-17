import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsSpeedWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 118 94" fill="none" ref={svgRef} {...props}>
      <Path
        d="M114.89 53.648l-56.09 5.18M54.05 58.758a4.76 4.76 0 114.75 4.78 4.74 4.74 0 01-4.75-4.78v0zM4.35 58.768h10.82M104.63 90.818l-10.09-7.05M14.2 89.948l8.86-6.18M58.8 4.378v10.81M97.31 20.308l-7.66 7.64M20.3 20.308l7.66 7.64M113.31 58.798h-10.83"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M54.05 58.758a4.76 4.76 0 114.75 4.78 4.74 4.74 0 01-4.75-4.78v0z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M94.54 83.758l10.66 7.72a56.786 56.786 0 00-6.634-73.208A56.78 56.78 0 002 58.758a56.35 56.35 0 0010.41 32.73l10.65-7.73"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsSpeedWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
