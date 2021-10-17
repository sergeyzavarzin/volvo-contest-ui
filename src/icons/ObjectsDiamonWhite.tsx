import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsDiamonWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 94 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M53.811 2l13.215 24.204a6.15 6.15 0 01.436 4.84L46.55 91.556M39.287 2L26.07 26.204a6.147 6.147 0 00-.435 4.84l20.912 60.511"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.367 25.188L19.39 5.825A9.682 9.682 0 0127.184 2h38.727a9.682 9.682 0 017.6 3.583l16.023 19.363a6.1 6.1 0 01.58 7.406L53.858 90.103a8.713 8.713 0 01-14.522 0L2.98 32.353a6.1 6.1 0 01.387-7.165v0zM2.983 28.624h87.135"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsDiamonWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
