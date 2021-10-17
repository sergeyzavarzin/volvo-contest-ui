import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinanceLineChartWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 98 78" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 2v73.85h93.54M90.62 11.84a4.92 4.92 0 100-9.84 4.92 4.92 0 000 9.84zM61.08 43.84a4.92 4.92 0 100-9.84 4.92 4.92 0 000 9.84zM36.46 24.15a4.92 4.92 0 100-9.84 4.92 4.92 0 000 9.84zM31.98 23.12L11.82 41.4M40.41 22.71l16.3 13.17M66 34l21.53-22.49"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinanceLineChartWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
