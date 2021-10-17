import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsTimerWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 106 116" fill="none" ref={svgRef} {...props}>
      <Path
        d="M103.431 63.295a50.586 50.586 0 01-8.547 28.133 50.702 50.702 0 01-22.76 18.651 50.791 50.791 0 01-29.303 2.881 50.737 50.737 0 01-25.967-13.858 50.615 50.615 0 01-13.88-25.928A50.567 50.567 0 015.86 43.917 50.655 50.655 0 0124.54 21.19a50.77 50.77 0 0128.175-8.534c13.45 0 26.35 5.335 35.861 14.832a50.6 50.6 0 0114.855 35.806v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M26.023 63.299h26.693V31.24"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M39.37 2h26.688"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsTimerWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
