import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsAnchorWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 89 94" fill="none" ref={svgRef} {...props}>
      <Path
        d="M44.5 17.454A7.727 7.727 0 1044.5 2a7.727 7.727 0 000 15.454zM44.5 17.455V77.34"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M17.454 59.955H2a44.47 44.47 0 0085 0H71.546"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.454 59.955H2c5.718 17.927 22.525 19.318 42.5 19.318s36.627-1.39 42.5-19.318H71.546"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.977 29.046h27.046"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsAnchorWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
