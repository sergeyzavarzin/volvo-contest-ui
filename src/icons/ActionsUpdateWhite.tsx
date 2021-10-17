import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsUpdateWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 118 109" fill="none" ref={svgRef} {...props}>
      <Path
        d="M109.01 42.906a52.33 52.33 0 00-100.9-4.55M6.08 61.085a52.32 52.32 0 00102.39 6.82"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.57 38.446l-13.35 3.16a1.71 1.71 0 01-2.05-1.3L2 26.996M115.64 79.306l-4.82-12.87a1.707 1.707 0 00-2.2-1l-12.8 4.87"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsUpdateWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
