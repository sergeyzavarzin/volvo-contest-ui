import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldOngoingChatBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 93" fill="none" ref={svgRef} {...props}>
      <Path
        d="M23.068 67.452C22.366 80.327 9.023 90.86 9.023 90.86A71.023 71.023 0 0043.34 72.649c3.37.434 6.763.653 10.16.655 28.466 0 51.5-15.965 51.5-35.629C105 18.012 81.966 2 53.5 2 25.035 2 2 17.965 2 37.675c0 11.799 8.287 23.316 21.068 29.777z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.75 44.137a7.023 7.023 0 100-14.046 7.023 7.023 0 000 14.046zM55.841 44.137a7.023 7.023 0 100-14.046 7.023 7.023 0 000 14.046zM83.931 44.137a7.023 7.023 0 100-14.046 7.023 7.023 0 000 14.046z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldOngoingChatBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
