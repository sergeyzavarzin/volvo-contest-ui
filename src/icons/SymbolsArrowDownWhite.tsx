import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsArrowDownWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 76 99" fill="none" ref={svgRef} {...props}>
      <Path
        d="M37.81 2v94M73.62 60.19L37.81 96 2 60.19"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsArrowDownWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
