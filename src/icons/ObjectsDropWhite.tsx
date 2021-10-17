import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsDropWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 72 113" fill="none" ref={svgRef} {...props}>
      <Path
        d="M43.872 2S5.334 45.146 2.204 73.359a33.598 33.598 0 0066.787 7.388 41.31 41.31 0 00.231-5.412c-.138-8.948-1.782-16.004-9.53-24.214C37.823 27.987 43.742 2.877 43.872 2z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsDropWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
