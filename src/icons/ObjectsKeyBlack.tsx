import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsKeyBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 128 59" fill="none" ref={svgRef} {...props}>
      <Path
        d="M105.38 36.475a7.38 7.38 0 100-14.76 7.38 7.38 0 000 14.76z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M72.77 19.245a27.09 27.09 0 110 19.69H56.16l-4.93-4.93h-4.92l-4.92 4.93h-9.85l-4.92-4.93h-4.93l-4.92 4.93h-4.92L2 29.095l9.85-9.85h60.92z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsKeyBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
