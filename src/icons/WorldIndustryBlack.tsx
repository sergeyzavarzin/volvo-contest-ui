import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldIndustryBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 91 88" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 85.231v-68.5h15.99v38.82l22.83-11.42v11.42l22.84-11.42v11.42l25.11-11.4v41.08H2zM11.14 5.311a11.32 11.32 0 0116 0M47.68 9.88a11.32 11.32 0 01-16 0"
        stroke="#000"
        strokeWidth={3.71}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldIndustryBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
