import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDevicesCalculatorWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 76 105" fill="none" ref={svgRef} {...props}>
      <Path
        d="M44.9 78.267h14.3M16.3 59.2h14.3M23.45 66.35v-14.3M18.683 78.267l9.533 9.533M18.683 87.8l9.533-9.533M44.9 59.2h14.3M44.9 87.8h14.3"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M63.967 2H11.533A9.533 9.533 0 002 11.533v81.034a9.533 9.533 0 009.533 9.533h52.434a9.533 9.533 0 009.533-9.533V11.533A9.533 9.533 0 0063.967 2z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDevicesCalculatorWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
