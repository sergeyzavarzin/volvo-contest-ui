import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldHighwayWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 76" fill="none" ref={svgRef} {...props}>
      <Path
        d="M104.781 73.5H2M42.219 2L6.469 73.5M64.563 2l35.749 71.5M53.39 28.813v8.937M53.39 13.172v4.469M53.39 2v2.234M53.39 48.922v13.406"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldHighwayWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
