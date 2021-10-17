import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNavigationFlagWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 65 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 49.361l5.45-4.08a18.92 18.92 0 0124.75 1.72v0a19 19 0 0024.76 1.8l5.44-4.09V5.221l-5.44 4.09a19 19 0 01-24.76-1.76v0a18.92 18.92 0 00-24.75-1.76L2 9.871v95.24M2.01 5.221v4.65"
        stroke="#fff"
        strokeWidth={3.77}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigationFlagWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
