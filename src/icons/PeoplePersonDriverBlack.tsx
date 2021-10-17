import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeoplePersonDriverBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 100 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M26.62 80.77l12.3 12.31M2 56.15l14.77 14.77"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.77 78.61l-7.91 8.05"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M68.47 63.54L24.18 81.23a5.77 5.77 0 01-7.32-2.78v0a5.79 5.79 0 012.49-7.72l50-26.07a7.41 7.41 0 013.42-.83h10.52a7.89 7.89 0 017 4.35v0c3.39 5.19 5.2 10.41 5.2 22.72v22.16M56.15 93.08l4.93-24.62"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M77.08 43.84C88.634 43.84 98 34.474 98 22.92 98 11.366 88.634 2 77.08 2c-11.554 0-20.92 9.366-20.92 20.92 0 11.554 9.366 20.92 20.92 20.92z"
        stroke="#000"
        strokeWidth={4}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeoplePersonDriverBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
