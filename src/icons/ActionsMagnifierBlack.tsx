import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsMagnifierBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 102 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M40.017 78.033c20.996 0 38.016-17.02 38.016-38.016S61.013 2 40.017 2 2 19.02 2 40.017c0 20.996 17.02 38.016 38.017 38.016z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M72.655 61.144l24.983 24.982a8.2 8.2 0 010 11.514 8.2 8.2 0 01-11.514 0L61.142 72.658"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsMagnifierBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
