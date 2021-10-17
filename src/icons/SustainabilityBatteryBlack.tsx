import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSustainabilityBatteryBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 118 54" fill="none" ref={svgRef} {...props}>
      <Path
        d="M112.74 2H11.87a2.49 2.49 0 00-2.49 2.49v44.25a2.49 2.49 0 002.49 2.49h100.87a2.49 2.49 0 002.49-2.49V4.49A2.49 2.49 0 00112.74 2z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M38.92 19.23V34M2 19.23V34M31.54 26.62h14.77M78.31 26.62h14.77"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSustainabilityBatteryBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
