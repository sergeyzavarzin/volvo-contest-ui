import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTransportationTrainWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 93 103" fill="none" ref={svgRef} {...props}>
      <Path
        d="M17.804 94.4h57.2M19.916 85.6L15.604 101M72.849 85.6l4.356 15.4M59.604 87.8h-26.4c-17.6 0-35.2-13.2-30.404-32.78l7.04-35.2A20.592 20.592 0 0128.804 2h35.2a20.592 20.592 0 0119.052 17.6l7.04 35.2c4.708 19.8-12.628 33-30.492 33zM20.004 48.2l6.6 11M70.604 48.2l-6.6 11"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M57.36 41.6h-22a11.748 11.748 0 01-10.956-8.492l-2.112-7.392A11.704 11.704 0 0133.204 10.8h26.4a11.706 11.706 0 0111.22 14.916l-2.112 7.392A11.748 11.748 0 0157.36 41.6z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransportationTrainWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
