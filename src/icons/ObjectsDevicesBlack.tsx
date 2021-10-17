import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsDevicesBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 115 71" fill="none" ref={svgRef} {...props}>
      <Path
        d="M51.24 53.69H14.31a5.29 5.29 0 01-4.92-4.92V6.92A5.29 5.29 0 0114.31 2H85.7a5.3 5.3 0 014.92 4.92M51.24 68.46H11.85C7 68.46 2 65.92 2 61.08h49.24"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M85.69 68.46H58.62V11.85h44.33v14.76"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M112.78 33.96h-19.7v34.5h19.7v-34.5z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M80.77 63.54a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM102.92 63.54a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z"
        fill="#000"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsDevicesBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
