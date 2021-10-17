import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionHouseWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 112 95" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 50.047l47.25-45a9 9 0 0113.5 0l47.25 45"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.25 41.047v47.25a4.5 4.5 0 004.5 4.5h22.5v-40.5h31.5v40.5h22.5a4.5 4.5 0 004.5-4.5v-47.25"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionHouseWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
