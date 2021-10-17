import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsWifiOffBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 109 94" fill="none" ref={svgRef} {...props}>
      <Path
        d="M33.501 62.405a29.528 29.528 0 0110.42-6.863 29.366 29.366 0 0112.302-1.932M56.224 30.057c13.425.443 26.183 5.996 35.7 15.54M17.016 45.703A52.334 52.334 0 0136.294 33.27M38.057 10.52a74.023 74.023 0 0137.032 1.135A74.407 74.407 0 01107 30.606M2 30.585a73.051 73.051 0 0117.85-13.32M60.506 89.489a8.38 8.38 0 01-4.303 2.27 8.347 8.347 0 01-4.832-.508 8.413 8.413 0 01-3.744-3.116 8.498 8.498 0 010-9.364 8.414 8.414 0 013.744-3.116 8.348 8.348 0 014.832-.508 8.38 8.38 0 014.303 2.27 8.458 8.458 0 011.862 2.763 8.507 8.507 0 01-1.862 9.309v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.658 2l75.6 76.114"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsWifiOffBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
