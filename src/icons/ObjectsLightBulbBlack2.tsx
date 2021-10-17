import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsLightBulbBlack2(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 68 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M17.977 70.317h32v9.143a4.571 4.571 0 01-4.57 4.571H22.548a4.571 4.571 0 01-4.572-4.571v-9.143zM45.633 86.317a11.429 11.429 0 01-22.857 0"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.023 70.318a21.486 21.486 0 00-6.674-13.715 32 32 0 1145.302 0v0a21.12 21.12 0 00-6.537 13.715M34.205 70.18V42.752"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsLightBulbBlack2);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
