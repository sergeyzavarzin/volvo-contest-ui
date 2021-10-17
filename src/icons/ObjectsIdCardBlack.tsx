import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsIdCardBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 102 70" fill="none" ref={svgRef} {...props}>
      <Path
        d="M93.274 2H7.784A5.785 5.785 0 002 7.785v54.43A5.785 5.785 0 007.785 68h85.49a5.785 5.785 0 005.784-5.785V7.785A5.785 5.785 0 0093.274 2z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M44.707 56.353c0-6.794 1.048-13.588-15.53-13.588-16.577 0-15.529 6.871-15.529 13.588"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.982 40.824a8.735 8.735 0 100-17.471 8.735 8.735 0 000 17.47z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M3.941 13.647h93.177M83.529 29.176H56.353M83.529 40.824H56.353M83.529 52.47H56.353"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsIdCardBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
