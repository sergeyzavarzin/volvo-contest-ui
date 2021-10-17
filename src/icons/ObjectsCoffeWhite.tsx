import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsCoffeWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 91 105" fill="none" ref={svgRef} {...props}>
      <Path
        d="M31.217 27.837a11.697 11.697 0 010-16.442M38.549 2a11.697 11.697 0 010 16.442M48.977 103H20.79A14.843 14.843 0 016.698 88.907L2 37.232h65.767L63.07 88.907A14.845 14.845 0 0148.977 103z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M67.582 45.03a15.597 15.597 0 014.697-.705 16.442 16.442 0 010 32.884 17.192 17.192 0 01-4.697-.658l-2.443-.845"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsCoffeWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
