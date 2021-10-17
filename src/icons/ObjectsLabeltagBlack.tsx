import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsLabeltagBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M9.23 2h34a9.83 9.83 0 016.9 2.85l49.34 49.34a7.37 7.37 0 010 10.44L66.4 97.74a7.39 7.39 0 01-10.44 0l-51.08-51A9.85 9.85 0 012 39.79V9.24A7.24 7.24 0 019.23 2v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M28.11 34.99a8.62 8.62 0 100-17.24 8.62 8.62 0 000 17.24z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsLabeltagBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
