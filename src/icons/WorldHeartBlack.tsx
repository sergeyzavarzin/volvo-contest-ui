import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldHeartBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 109 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M100.164 47.505L60.71 94.95a8.082 8.082 0 01-12.42 0L8.836 47.505A27.398 27.398 0 1154.5 18.417a27.398 27.398 0 1145.664 29.088z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldHeartBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
