import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSustainabilityEnergyBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 66 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M34.226 47.182L47.141 2 2 59.482h29.274l-12.874 45.1 45.1-57.4H34.226z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSustainabilityEnergyBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
