import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinanceCalculatorWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 76 108" fill="none" ref={svgRef} {...props}>
      <Path
        d="M16.77 58.62h14.77M18.93 88.45l10.45-10.44M43.85 88.15h14.77M43.85 78.31h14.77M24.15 66V51.23M18.93 78.01l10.45 10.44M43.85 58.62h14.77M63.54 11.85H11.85v27.08h51.69V11.85z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M66.76 2H8.62A6.62 6.62 0 002 8.62v90.14a6.62 6.62 0 006.62 6.62h58.14a6.62 6.62 0 006.62-6.62V8.62A6.62 6.62 0 0066.76 2z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinanceCalculatorWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
