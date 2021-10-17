import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinancePieChartBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 118 110" fill="none" ref={svgRef} {...props}>
      <Path
        d="M88.813 92.13a50.85 50.85 0 11-36-86.8v50.85l36 36v-.05zM69.033 2.02v38l24.4-24.44A50.82 50.82 0 0069.033 2v.02zM106.622 84.58l-28.35-28.4 28.35-28.35a50.887 50.887 0 010 56.69v.06z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinancePieChartBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
