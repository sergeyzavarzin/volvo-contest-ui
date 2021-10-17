import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsSteeringWheelBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 114 114" fill="none" ref={svgRef} {...props}>
      <Path
        d="M56.62 111.24c30.166 0 54.62-24.454 54.62-54.62C111.24 26.454 86.786 2 56.62 2 26.454 2 2 26.454 2 56.62c0 30.166 24.454 54.62 54.62 54.62z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M56.62 80.023v31.207M85.223 49.491h23.403M4.604 49.491h23.404"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M68.496 80.37h-23.75a7.573 7.573 0 01-7.12-4.755l-9.753-31.217a5.218 5.218 0 014.978-6.753h47.54a5.219 5.219 0 014.977 6.753l-9.753 31.217a7.573 7.573 0 01-7.12 4.756v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsSteeringWheelBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
