import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsLockedBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 74 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M62.758 39.333H11.425V27.667c0-14 9.333-25.667 21-25.667h9.333c11.573 0 21 11.667 21 25.667v11.666zM37.09 67.333a7 7 0 100-14 7 7 0 000 14z"
        stroke="#000"
        strokeWidth={4}
      />
      <Path
        d="M6.667 39.334h60.666A4.667 4.667 0 0172 44v42a14 14 0 01-14 14H16A14 14 0 012 86V44a4.667 4.667 0 014.667-4.666v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsLockedBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
