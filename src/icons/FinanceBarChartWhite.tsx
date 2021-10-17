import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinanceBarChartWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 96 80" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 2v76h92"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30 42H14v28h16V42zM58 22H42v48h16V22zM86 6H70v64h16V6z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinanceBarChartWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
