import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinanceChartUpWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 96 80" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 2v76h92M78.001 6h12v12"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M90 6L58 38 46 26 18 54"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinanceChartUpWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
