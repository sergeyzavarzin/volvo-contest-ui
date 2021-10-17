import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionSoundOffWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 100 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 2l96 96"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M74 63.333V2L47.332 26H36.666M15.334 31.333v37.334A5.333 5.333 0 0020.667 74h26.667l26.667 24V84.667"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionSoundOffWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
