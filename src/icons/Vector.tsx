import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgVector(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 101 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 2.688l96.57 96.569"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVector);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
