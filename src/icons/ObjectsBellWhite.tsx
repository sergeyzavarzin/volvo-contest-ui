import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsBellWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 92 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M34.653 85.368a12.643 12.643 0 00-.232 2.316 11.579 11.579 0 1023.158 0 12.643 12.643 0 00-.232-2.316M90 85.368H2c16.21 0 16.21-41.684 16.21-41.684a27.79 27.79 0 0120.472-26.77 8.986 8.986 0 01-1.945-5.65 9.263 9.263 0 0118.526 0 8.986 8.986 0 01-1.945 5.65 27.789 27.789 0 0120.472 26.77s0 41.684 16.21 41.684z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsBellWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
