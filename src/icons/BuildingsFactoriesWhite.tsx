import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBuildingsFactoriesWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 97 94" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 91.231V17.793h17.143v41.618l24.475-12.243v12.243l24.487-12.243v12.243l26.92-12.221V91.23H2zM11.799 5.55a12.136 12.136 0 0117.153 0M50.973 10.449a12.136 12.136 0 01-17.154 0"
        stroke="#fff"
        strokeWidth={3.71}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuildingsFactoriesWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
