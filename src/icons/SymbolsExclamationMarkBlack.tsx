import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsExclamationMarkBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 107 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M53.5 105c28.443 0 51.5-23.057 51.5-51.5S81.943 2 53.5 2 2 25.057 2 53.5 25.057 105 53.5 105z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M50.262 65.516l-1.03-41.445h8.485l-.931 41.445h-6.524zm-.932 17.412V71.893h8.29v11.035h-8.29z"
        fill="#000"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsExclamationMarkBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
