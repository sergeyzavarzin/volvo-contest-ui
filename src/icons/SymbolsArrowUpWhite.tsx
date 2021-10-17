import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsArrowUpWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 76 99" fill="none" ref={svgRef} {...props}>
      <Path
        d="M37.81 97V3M2 38.81L37.81 3l35.809 35.81"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsArrowUpWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
