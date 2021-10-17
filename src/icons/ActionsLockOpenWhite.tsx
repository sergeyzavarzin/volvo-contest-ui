import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsLockOpenWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 73 104" fill="none" ref={svgRef} {...props}>
      <Path
        d="M11.18 42.91V27c0-13.636 9.09-25 20.454-25h9.091C51.998 2 61.18 13.364 61.18 27"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M36.18 70.182a6.818 6.818 0 100-13.636 6.818 6.818 0 000 13.636z"
        stroke="#fff"
        strokeWidth={4}
      />
      <Path d="M36.18 70.182v13.636" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
      <Path
        d="M6.545 42.909h59.091a4.545 4.545 0 014.546 4.545v40.91A13.637 13.637 0 0156.545 102H15.636A13.637 13.637 0 012 88.364v-40.91a4.545 4.545 0 014.545-4.545v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsLockOpenWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
