import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFilesCopyBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 90 105" fill="none" ref={svgRef} {...props}>
      <Path
        d="M83.155 87.929H30.643a4.774 4.774 0 01-4.774-4.774V6.774A4.774 4.774 0 0130.643 2H64.06l23.869 23.869v57.286a4.774 4.774 0 01-4.774 4.774z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M64.06 95.09v2.386a4.775 4.775 0 01-4.774 4.774H6.774A4.775 4.775 0 012 97.476v-76.38a4.774 4.774 0 014.774-4.775h11.934M64.06 2v19.095a4.774 4.774 0 004.773 4.774h19.095"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilesCopyBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
