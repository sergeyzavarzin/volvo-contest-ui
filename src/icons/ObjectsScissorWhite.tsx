import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsScissorWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 91" fill="none" ref={svgRef} {...props}>
      <Path
        d="M72 23.429C72 27.714 64.286 32 64.286 32L6 62c4.286 5.143 23.143 0 23.143 0C42 58.571 68.57 48.286 68.57 48.286l-.857-7.715C68.571 35.43 87.43 32 87.43 32A15.018 15.018 0 00102 17 14.999 14.999 0 0076.547 6.246 15.017 15.017 0 0072 16.57v6.858zM90 58.783a15.017 15.017 0 0111.143 14.503 15 15 0 01-30 0 14.484 14.484 0 01.309-3S73 63.5 70.286 61.714L64 58l9.857-3.786c5.516 2.318 10.31 3.48 16.19 4.582"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M33.5 38.5l15.429-7.714-21.786-8.12s-18-6-23.143 0L33.5 38.5z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M58.5 46a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsScissorWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
