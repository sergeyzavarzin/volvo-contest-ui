import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPagesBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 88 105" fill="none" ref={svgRef} {...props}>
      <Path
        d="M11.84 19.23H6.92A4.93 4.93 0 002 24.15V98a4.93 4.93 0 004.92 4.92h56.62A4.919 4.919 0 0068.46 98v-4.93"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M84.15 22.61L65.08 3.54c-1-1-1.54-1.54-4-1.54H24.15a4.92 4.92 0 00-4.92 4.92v73.85a5.44 5.44 0 004.92 4.92h56.62a5.44 5.44 0 004.92-4.92V26.61a6 6 0 00-1.54-4v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M61.07 2v19.69A5.3 5.3 0 0066 26.61h19.69"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPagesBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
