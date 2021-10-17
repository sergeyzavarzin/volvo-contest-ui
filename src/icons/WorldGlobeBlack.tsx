import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldGlobeBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 116 116" fill="none" ref={svgRef} {...props}>
      <Path
        d="M57.64 113.29c30.73 0 55.64-24.91 55.64-55.64 0-30.729-24.91-55.64-55.64-55.64S2 26.921 2 57.65c0 30.73 24.91 55.64 55.64 55.64z"
        stroke="#000"
        strokeWidth={3.77}
        strokeLinecap="round"
      />
      <Path
        d="M57.64 113.29c17.37 0 31.45-24.91 31.45-55.64 0-30.729-14.08-55.64-31.45-55.64-17.37 0-31.45 24.911-31.45 55.64 0 30.73 14.08 55.64 31.45 55.64zM57.64 2v111.29"
        stroke="#000"
        strokeWidth={3.77}
        strokeLinecap="round"
      />
      <Path d="M4.41 40.71h106.45M4.41 74.58h106.45" stroke="#000" strokeWidth={3.77} />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldGlobeBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
