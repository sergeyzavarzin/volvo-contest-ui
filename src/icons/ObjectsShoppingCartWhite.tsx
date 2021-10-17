import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsShoppingCartWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 98 93" fill="none" ref={svgRef} {...props}>
      <Path
        d="M24.15 21.7h71.39l-6.31 34.06a6.63 6.63 0 01-6.49 5.32H29.08"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 2h13.89a6.46 6.46 0 016.42 5.78l6.13 62.16a6.62 6.62 0 006.58 5.91h45.75M38.92 90.61a4.92 4.92 0 100-9.84 4.92 4.92 0 000 9.84zM70.92 90.61a4.92 4.92 0 100-9.84 4.92 4.92 0 000 9.84z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsShoppingCartWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
