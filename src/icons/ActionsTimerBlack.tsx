import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsTimerBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 106 116" fill="none" ref={svgRef} {...props}>
      <Path
        d="M103.431 63.295a50.586 50.586 0 01-8.547 28.133 50.7 50.7 0 01-22.76 18.651 50.792 50.792 0 01-29.303 2.882 50.74 50.74 0 01-25.967-13.86 50.614 50.614 0 01-13.88-25.927A50.566 50.566 0 015.86 43.917a50.655 50.655 0 0118.68-22.726 50.77 50.77 0 0128.175-8.534c13.45 0 26.35 5.335 35.861 14.832a50.6 50.6 0 0114.855 35.806v0z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M26.023 63.299h26.693V31.24"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M39.37 2h26.688"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsTimerBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
