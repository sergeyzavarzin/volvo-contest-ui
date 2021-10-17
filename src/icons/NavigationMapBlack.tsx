import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNavigationMapBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 98 93" fill="none" ref={svgRef} {...props}>
      <Path
        d="M95.45 17.575L64.3 2v73.425L95.45 91V17.575zM33.15 91L2 79.875V6.45l31.15 11.125V91zM64.3 75.425L33.15 91V17.575L64.3 2v73.425z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigationMapBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
