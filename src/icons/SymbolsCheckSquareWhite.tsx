import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsCheckSquareWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 102 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M22.632 43.263l20.631 25.79 38.685-41.264"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M92.315 2H9.685A7.685 7.685 0 002 9.685v82.63A7.685 7.685 0 009.685 100h82.63A7.685 7.685 0 00100 92.315V9.685A7.685 7.685 0 0092.315 2z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsCheckSquareWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
