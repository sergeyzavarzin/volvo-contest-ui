import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNavigationPositionIndicatorWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 95 95" fill="none" ref={svgRef} {...props}>
      <Path
        d="M92.5 2L2 46.09h41.77a4.64 4.64 0 014.64 4.64V92.5L92.5 2z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigationPositionIndicatorWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
