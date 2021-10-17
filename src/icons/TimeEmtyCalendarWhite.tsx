import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTimeEmtyCalendarWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 102 93" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 10.477h97.476v72.047A8.476 8.476 0 0191 91H10.476A8.477 8.477 0 012 82.524V10.477z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.19 2v16.952M78.285 2v16.952M2 31.666h97.476"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimeEmtyCalendarWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
