import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBuildingAssemlyLineBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 118 76" fill="none" ref={svgRef} {...props}>
      <Path
        d="M49.606 66.713a7.286 7.286 0 11-14.572 0 7.286 7.286 0 0114.572 0v0zM16.573 66.713a7.287 7.287 0 11-14.574 0 7.287 7.287 0 0114.574 0v0zM82.638 66.713a7.286 7.286 0 11-14.572 0 7.286 7.286 0 0114.572 0zM115.673 66.713a7.285 7.285 0 01-4.499 6.732 7.286 7.286 0 114.499-6.732zM9.287 59.427h97.638M10.744 74h96.185"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M71.95 37.567H50.09v21.86h21.86v-21.86zM102.555 37.567h-21.86v21.86h21.86v-21.86zM57.013 30.28v-7.288M55.745 22.84L18.932 12.315a5.258 5.258 0 113.28-9.987L58.097 15.65a3.787 3.787 0 01-2.353 7.192v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.128 14.47l1.763 23.49c.075 1.653-1.471 3.097-3.497 3.29-2.026.193-3.807-.963-4.037-2.601L15.174 8.045M31.51 44.852H16.938v7.288H31.51v-7.288z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuildingAssemlyLineBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
