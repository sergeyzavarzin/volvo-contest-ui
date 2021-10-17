import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsAddUserBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 117 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2.03 100v-4.9c0-18.963-2.744-41.65 44.1-41.65s44.1 22.442 44.1 41.65v4.9"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M46.129 51c13.53 0 24.5-10.97 24.5-24.5 0-13.531-10.97-24.5-24.5-24.5-13.531 0-24.5 10.969-24.5 24.5 0 13.53 10.969 24.5 24.5 24.5z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M85.28 41.2h29.4M99.98 55.9V26.5"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsAddUserBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
