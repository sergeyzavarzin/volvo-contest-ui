import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldHallBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 105 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M52.25 28.74a6.852 6.852 0 100-13.705 6.852 6.852 0 000 13.705zM95.51 83.558H8.852v13.705H95.51V83.558z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M92.678 37.876H11.82a1.098 1.098 0 01-.685-1.918l39.697-33.44a2.192 2.192 0 012.832 0l39.698 33.44a1.096 1.096 0 01-.685 1.918v0zM2 97.263h100.5M17.989 83.558V37.876M40.83 83.558V37.876M86.511 83.558V37.876M63.67 83.558V37.876"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldHallBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
