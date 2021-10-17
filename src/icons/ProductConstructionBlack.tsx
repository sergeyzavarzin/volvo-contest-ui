import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductConstructionBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 94 95" fill="none" ref={svgRef} {...props}>
      <Path
        d="M58.972 73.041h32.047M91.019 66.049H71.435V9.117L39.388 5.558V2h51.63M39.388 92.737c6.391 0 11.572-5.178 11.572-11.565 0-6.386-5.18-11.564-11.572-11.564-6.391 0-11.573 5.177-11.573 11.564 0 6.387 5.182 11.565 11.573 11.565z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.584 83.84H5.561A3.562 3.562 0 012 80.282V67.828l1.602-2.402a11.63 11.63 0 001.959-6.458V45.055a3.059 3.059 0 010-.694l4.575-22.897a4.305 4.305 0 014.238-3.452h21.364l2.582-2.58a3.347 3.347 0 012.368-.978h21.756V64.27l-8.902 3.558"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductConstructionBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
