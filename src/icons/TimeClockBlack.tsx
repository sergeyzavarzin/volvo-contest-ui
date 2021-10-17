import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTimeClockBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 113" fill="none" ref={svgRef} {...props}>
      <Path
        d="M56.15 110.3c29.906 0 54.15-24.244 54.15-54.15S86.056 2 56.15 2 2 26.244 2 56.15s24.244 54.15 54.15 54.15zM56.15 21.69v34.46M56.15 56.15H31.537"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimeClockBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
