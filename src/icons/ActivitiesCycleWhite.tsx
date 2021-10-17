import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesCycleWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 113" fill="none" ref={svgRef} {...props}>
      <Path
        d="M25.143 11.683a54 54 0 0168.65 5.75M11.683 86.862a54 54 0 015.75-68.65M86.863 100.322a53.998 53.998 0 01-66.86-4.07M100.323 25.143a53.998 53.998 0 01-4.07 66.86"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M107.433 94.572h-12.86v-12.86M94.573 4.572v12.86h-12.86M4.573 17.432h12.86v12.86M17.434 107.432v-12.86h12.86"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesCycleWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
