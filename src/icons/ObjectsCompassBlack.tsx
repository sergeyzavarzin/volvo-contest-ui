import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsCompassBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 118" fill="none" ref={svgRef} {...props}>
      <Path
        d="M68.272 8.32a54.16 54.16 0 11-24.61.09"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M46.312 48.77L31.542 34M66.002 48.77L80.772 34M46.312 73.38l-14.77 14.77M66.002 73.38l14.77 14.77"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.771 61.08l29.54 12.31 9.84 27.07 9.85-27.07 29.54-12.31-29.54-12.31L56.151 2l-9.84 46.77-29.54 12.31z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsCompassBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
