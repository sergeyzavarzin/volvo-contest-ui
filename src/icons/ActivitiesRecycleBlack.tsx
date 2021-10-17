import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesRecycleBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 111 114" fill="none" ref={svgRef} {...props}>
      <Path
        d="M92.989 59.418l-28.15-51.61a11.13 11.13 0 00-19.55 0l-8.15 15M39.889 101.138h57.1a11.133 11.133 0 009.576-5.452 11.148 11.148 0 001.56-5.482 11.151 11.151 0 00-1.356-5.536l-8.72-16M31.618 32.868l-28.26 51.8a11.14 11.14 0 009.78 16.47h14.11"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M47.478 111.258l-10.11-10.11 10.11-10.12M97.449 46.968l-3.7 13.82-13.82-3.7M18.969 34.388l13.81-3.7 3.7 13.81"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesRecycleBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
