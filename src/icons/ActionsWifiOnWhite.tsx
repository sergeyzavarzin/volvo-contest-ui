import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsWifiOnWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 109 87" fill="none" ref={svgRef} {...props}>
      <Path
        d="M33.48 55.347a29.715 29.715 0 0142-.147M17.017 38.779a52.92 52.92 0 0174.865-.106M2 23.742a74.256 74.256 0 01105 0M60.507 82.248a8.4 8.4 0 11-11.767-11.99 8.4 8.4 0 0111.767 11.99z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsWifiOnWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
