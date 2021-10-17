import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPenWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 97 94" fill="none" ref={svgRef} {...props}>
      <Path
        d="M55.96 51.873l-13.92-13.92 33.07-33.07a9.843 9.843 0 0113.92 13.92l-33.07 33.07zM54.22 50.133l-10.44-10.44-33.07 33.07C4.46 79.013 2 91.913 2 91.913s12.9-2.46 19.15-8.71l33.07-33.07z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M89.03 4.883c7.18 7.18 7.18 17.18 0 24.37L66.4 51.873"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPenWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
