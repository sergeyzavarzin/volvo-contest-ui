import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsAddPlusBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M53.5 105c28.443 0 51.5-23.057 51.5-51.5S81.943 2 53.5 2 2 25.057 2 53.5 25.057 105 53.5 105z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M53.5 26.524v53.952M26.524 53.5h53.952"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsAddPlusBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
