import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsSpeedBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 112 90" fill="none" ref={svgRef} {...props}>
      <Path
        d="M55.75 2.148v11.685M19.76 15.937l7.853 8.694M2.278 50.289l11.638 1.215M91.737 15.937l-7.852 8.694M109.221 50.289l-11.638 1.215"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M89.776 80.624l9.348 6.871A53.753 53.753 0 0093.8 17.786 53.75 53.75 0 002 55.9a53.236 53.236 0 0010.283 31.596v0l9.348-6.87"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M55.75 62.91a7.01 7.01 0 100-14.022 7.01 7.01 0 000 14.021z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M62.762 53.561L95.479 39.54" stroke="#000" strokeWidth={4} strokeLinecap="round" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsSpeedBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
