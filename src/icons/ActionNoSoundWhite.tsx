import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionNoSoundWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 68 109" fill="none" ref={svgRef} {...props}>
      <Path
        d="M7.818 80.546H36.91L66 106.727V2L36.91 28.182H7.817A5.818 5.818 0 002 34v40.727a5.818 5.818 0 005.818 5.819z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionNoSoundWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
