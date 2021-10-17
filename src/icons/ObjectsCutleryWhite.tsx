import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsCutleryWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 67 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M18.728 43.818v46a4.182 4.182 0 11-8.364 0v-46M18.727 6.182V27.09M10.364 27.091V6.181M64.727 2v87.818a4.182 4.182 0 11-8.363 0V56.364H43.818V22.909A20.91 20.91 0 0164.728 2v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.09 6.182v25.09a12.545 12.545 0 11-25.09 0V6.183"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsCutleryWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
