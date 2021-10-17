import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTimeMoonBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 114" fill="none" ref={svgRef} {...props}>
      <Path
        d="M71.969 87.098A47.696 47.696 0 0146.9 6.543a2.65 2.65 0 00-2.544-4.452 55.593 55.593 0 1058.721 85.96 2.649 2.649 0 10-3.18-4.239 47.22 47.22 0 01-27.93 3.286v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimeMoonBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
