import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNavigationPinPositionWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 81 112" fill="none" ref={svgRef} {...props}>
      <Path
        d="M40.58 59.93c9.477 0 17.16-7.683 17.16-17.16s-7.683-17.16-17.16-17.16-17.16 7.683-17.16 17.16 7.683 17.16 17.16 17.16z"
        stroke="#fff"
        strokeWidth={3.49}
        strokeMiterlimit={10}
      />
      <Path
        d="M74.13 60.7l-25.6 44.12a9.486 9.486 0 01-7.94 4.46 8.725 8.725 0 01-7.45-4.39l-26-44.9A39.57 39.57 0 012 40.62a38.62 38.62 0 0177.24 0 39.15 39.15 0 01-5.11 20.08v0z"
        stroke="#fff"
        strokeWidth={3.49}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigationPinPositionWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
