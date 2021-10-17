import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesBedBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 65" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 2v61M110.929 32.5V63M2 32.5h108.929M2 49.928h108.929M10.67 4.44s18.214 3.355 14.902 21.525c0 0-18.736-.305-14.901-21.525z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesBedBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
