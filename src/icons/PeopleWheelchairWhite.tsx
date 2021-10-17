import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeopleWheelchairWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 88 110" fill="none" ref={svgRef} {...props}>
      <Path
        d="M38.87 29.65c7.636 0 13.825-6.19 13.825-13.825C52.695 8.19 46.505 2 38.871 2c-7.636 0-13.825 6.19-13.825 13.825 0 7.635 6.19 13.824 13.825 13.824z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M27.35 37.667v28.986a9.216 9.216 0 009.216 9.216h20.737l17.189 22.534a6.031 6.031 0 003.971 2.486 6.025 6.025 0 004.554-1.103v0a6.036 6.036 0 001.66-7.927l-15.9-28.248a7.835 7.835 0 00-6.866-4.01h-11.52V37.668a4.93 4.93 0 00-3.18-4.609v0a21.705 21.705 0 00-16.313 0v0a4.931 4.931 0 00-3.548 4.609v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M51.73 89.557a25.348 25.348 0 01-29.226 17.965A25.353 25.353 0 013.88 92.22a25.345 25.345 0 0111.952-32.156M15.83 59.603V43.474H2.005"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeopleWheelchairWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
