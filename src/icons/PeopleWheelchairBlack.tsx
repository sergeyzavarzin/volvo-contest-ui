import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeopleWheelchairBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 88 110" fill="none" ref={svgRef} {...props}>
      <Path
        d="M38.87 29.65c7.636 0 13.825-6.19 13.825-13.825C52.695 8.19 46.505 2 38.871 2c-7.636 0-13.825 6.19-13.825 13.825 0 7.635 6.19 13.824 13.825 13.824z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M27.35 37.666v28.986a9.216 9.216 0 009.216 9.217h20.737l17.189 22.534a6.034 6.034 0 008.525 1.382v0a6.037 6.037 0 001.66-7.926l-15.9-28.248a7.834 7.834 0 00-6.866-4.01h-11.52V37.667a4.93 4.93 0 00-3.18-4.608v0a21.705 21.705 0 00-16.313 0v0a4.931 4.931 0 00-3.548 4.608v0zM51.73 89.557A25.346 25.346 0 1115.83 60.065M15.83 59.603V43.474H2.005"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeopleWheelchairBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
