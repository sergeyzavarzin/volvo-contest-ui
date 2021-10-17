import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsArrowRightWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 76" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 37.81h94M60.19 2L96 37.81 60.19 73.618"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsArrowRightWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
