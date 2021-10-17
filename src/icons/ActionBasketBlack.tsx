import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionBasketBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 120 89" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 30.334h115.694M11.444 30.334l13.034 51.944A6.044 6.044 0 0030.38 87h61.39a6.044 6.044 0 005.902-4.722l13.033-51.945M25.61 30.333L49.221 2M96.444 30.333L72.833 2M61.027 44.5v28.333M77.556 44.5v28.333M44.5 44.5v28.333"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionBasketBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
