import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeopleOperatorBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 95 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M16.8 87.526l4.93 4.92v7.35M2 72.716l4.96 4.96"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M58.65 70.256l-44.29 17.69a5.77 5.77 0 01-7.32-2.78v0a5.79 5.79 0 012.49-7.72l50-26.07a7.41 7.41 0 013.42-.83h10.52a7.89 7.89 0 017 4.35v0c3.39 5.19 5.2 10.41 5.2 22.72v22.16M46.34 99.796l4.93-24.62M48.8 92.406l36.93-2.46"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M48.8 82.566l36.93-2.46" stroke="#000" strokeWidth={4} strokeLinejoin="round" />
      <Path
        d="M92.41 25.867l-53.46.08 7.49-2.83S49.9 8.947 51 7.997c12.72-11.39 44.07-7.05 39.45 17.29"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M87.86 25.946c.213 1.219.32 2.453.32 3.69a20.92 20.92 0 11-41.84 0c0-1.237.107-2.471.32-3.69"
        stroke="#000"
        strokeWidth={4}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeopleOperatorBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
