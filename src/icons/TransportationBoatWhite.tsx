import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTransportationBoatWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 112 103" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 100a12.682 12.682 0 0010.8-5.72A12.68 12.68 0 0023.6 100a12.682 12.682 0 0010.8-5.72 13.04 13.04 0 0021.6 0 13.04 13.04 0 0021.6 0 13.039 13.039 0 0021.6 0A12.675 12.675 0 00110 100M10 88L8.8 60.2a4 4 0 013.4-4.92L56 48l44 9.16a4 4 0 013.24 4.84L102 88M56 88V48"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.04 52V32H17.92V16h76.12v16H81.92v20M26 24h12M86 24H74M62 24H50M38 16V2M32 16V8"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransportationBoatWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
