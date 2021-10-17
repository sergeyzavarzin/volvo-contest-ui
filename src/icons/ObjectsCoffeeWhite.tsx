import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsCoffeeWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 77 95" fill="none" ref={svgRef} {...props}>
      <Path
        d="M75 19.176H2v-5.668a2.92 2.92 0 012.92-2.92h67.16a2.92 2.92 0 012.92 2.92v5.668zM57.802 92.176H19.155a4.702 4.702 0 01-4.68-4.294L8.398 19.176h60.118l-6.055 68.706a4.724 4.724 0 01-4.659 4.294zM66.411 10.588H10.588l1.374-5.475A4.1 4.1 0 0115.934 2h45.088a4.08 4.08 0 013.972 3.113l1.417 5.475zM10.588 36.353H66.41M12.735 68.559h51.53"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsCoffeeWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
