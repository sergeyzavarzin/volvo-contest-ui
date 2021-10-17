import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsInfoBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M57.031 24.071h-6.18V34.47h6.18V24.071zM61.347 76.798h-4.365v-34.97H46.584v6.18h4.365v28.79h-4.365v6.18h14.763v-6.18z"
        fill="#000"
      />
      <Path
        d="M53.5 105c28.443 0 51.5-23.057 51.5-51.5S81.943 2 53.5 2 2 25.057 2 53.5 25.057 105 53.5 105z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsInfoBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
