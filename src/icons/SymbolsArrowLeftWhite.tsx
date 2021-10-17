import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsArrowLeftWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 76" fill="none" ref={svgRef} {...props}>
      <Path
        d="M97 37.81H3M38.81 73.62L3 37.81 38.81 2"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsArrowLeftWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
