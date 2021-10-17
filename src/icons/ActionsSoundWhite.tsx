import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsSoundWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 119 103" fill="none" ref={svgRef} {...props}>
      <Path
        d="M7.472 75.875h27.361L62.194 100.5V2l-27.36 24.625H7.471A5.472 5.472 0 002 32.097v38.306a5.472 5.472 0 005.472 5.472z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M75.875 35.544a19.152 19.152 0 010 31.41M81.348 19.675a35.624 35.624 0 010 63.15"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M86.82 4.079a51.982 51.982 0 0130.134 47.17A51.982 51.982 0 0186.819 98.42"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsSoundWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
