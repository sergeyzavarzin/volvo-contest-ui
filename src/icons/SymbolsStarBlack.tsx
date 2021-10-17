import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsStarBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 115 105" fill="none" ref={svgRef} {...props}>
      <Path
        d="M57.25 2l12.01 38.435h43.24L76.467 64.457 90.88 102.89 57.25 78.87 23.62 102.89l14.413-38.434L2 40.435h43.24L57.25 2z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsStarBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
