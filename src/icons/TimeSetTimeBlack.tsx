import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTimeSetTimeBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 101 93" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 10.435h97V82.13a8.435 8.435 0 01-8.435 8.435h-80.13A8.435 8.435 0 012 82.13V10.435z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.086 2v16.87M77.914 2v16.87M2 31.521h97M29.414 56.826l14.76 16.87 29.522-29.522"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimeSetTimeBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
