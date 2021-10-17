import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsLaptopBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 118 73" fill="none" ref={svgRef} {...props}>
      <Path
        d="M100.4 2H16.84a4.99 4.99 0 00-4.99 4.99V48.7a4.99 4.99 0 004.99 4.99h83.56a4.99 4.99 0 004.99-4.99V6.99A4.99 4.99 0 00100.4 2zM2 61.08h113.23a9.851 9.851 0 01-9.85 9.85H11.85A9.85 9.85 0 012 61.08v0z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsLaptopBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
