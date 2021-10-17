import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPenRulerBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 95 95" fill="none" ref={svgRef} {...props}>
      <Path
        d="M34.127 70.068l-9.743-9.79L13.72 70.987a41.364 41.364 0 00-8.135 17.879A41.364 41.364 0 0023.51 80.73l10.617-10.663zM34.31 70.068l-9.743-9.744L77.1 7.608a6.94 6.94 0 019.743 0v0a6.85 6.85 0 010 9.744L34.311 70.068zM85.236 19.006a9.192 9.192 0 010 13.007L75.08 42.905M62.115 45.89l30.886 30.84L76.73 93 45.89 62.114M32.885 49.11L2 18.27 18.27 2l30.84 30.885M11.744 28.015l6.526-6.527M21.488 37.756l6.527-6.526M57.242 73.515l6.527-6.527M66.986 83.256l6.527-6.526"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPenRulerBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
