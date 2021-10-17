import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionShoppingCartWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 102 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M25.21 22.632H100l-6.603 30.947a6.086 6.086 0 01-6.292 5.158H30.368"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 2h14.545a6.86 6.86 0 016.757 6.035l6.396 59.986a6.911 6.911 0 006.911 6.19h47.917M38.106 100a7.737 7.737 0 100-15.474 7.737 7.737 0 000 15.474zM76.79 100a7.737 7.737 0 100-15.474 7.737 7.737 0 000 15.474z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionShoppingCartWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
