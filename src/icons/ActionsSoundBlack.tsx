import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsSoundBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 119 103" fill="none" ref={svgRef} {...props}>
      <Path
        d="M7.472 75.875h27.361L62.194 100.5V2l-27.36 24.625H7.471A5.472 5.472 0 002 32.097v38.306a5.472 5.472 0 005.472 5.472z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M75.875 35.544a19.153 19.153 0 010 31.41M81.348 19.675a35.624 35.624 0 010 63.15"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M86.82 4.079a51.983 51.983 0 0130.134 47.17 51.982 51.982 0 01-30.135 47.17"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsSoundBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
