import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsFuelWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 120 44" fill="none" ref={svgRef} {...props}>
      <Path
        d="M16.77 41.38V11.85h39.38l7.39 7.38 41.85-14.77-32 36.92H16.77zM16.77 29.08L2 19.23V4.46l14.77 7.39M112.77 9.38l-7.39-4.92M36.46 11.85V2M26.62 2h19.69M117.7 29.07c0-3.39-6.16-12.3-6.16-12.3s-6.15 8.91-6.15 12.3a6.155 6.155 0 003.74 5.915 6.163 6.163 0 006.857-1.4 6.154 6.154 0 001.713-4.515z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsFuelWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
