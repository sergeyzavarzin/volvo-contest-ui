import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeopleKidWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 103 108" fill="none" ref={svgRef} {...props}>
      <Path
        d="M51.006 34c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M97.244 34l-27.52 21.333v40A10.665 10.665 0 0159.056 106h-16A10.665 10.665 0 0132.39 95.333v-40L4.87 34.373a6.293 6.293 0 013.52-11.574 6.668 6.668 0 012.667.534L32.39 36.506l8.533-1.227c6.74-.96 13.581-.96 20.32 0l8.48 1.227 21.334-13.547a6.666 6.666 0 012.827-.693 6.294 6.294 0 013.36 11.733v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeopleKidWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
