import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldSnowBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 119" fill="none" ref={svgRef} {...props}>
      <Path
        d="M51.71 2v114.81M33.44 103.76l18.27-10.44 18.27 10.44M69.98 15.04L51.71 25.48 33.44 15.04M2 88.11l99.43-57.41M99.26 53.04l-18.17-10.6-.1-21.04M4.16 65.76l18.17 10.6.1 21.04M101.43 88.11L2 30.7M22.43 21.4l-.1 21.04-18.17 10.6M80.99 97.4l.1-21.04 18.17-10.6"
        stroke="#000"
        strokeWidth={3.73}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldSnowBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
