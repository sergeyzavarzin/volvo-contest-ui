import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesMyLocationBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 122 122" fill="none" ref={svgRef} {...props}>
      <Path
        d="M61 105.84c24.764 0 44.839-20.075 44.839-44.84 0-24.764-20.075-44.84-44.84-44.84-24.764 0-44.84 20.076-44.84 44.84 0 24.765 20.076 44.84 44.84 44.84z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M61 77.52c9.123 0 16.52-7.396 16.52-16.52 0-9.124-7.397-16.52-16.52-16.52-9.124 0-16.52 7.396-16.52 16.52 0 9.124 7.396 16.52 16.52 16.52z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M2 61h23.6M96.4 61h23.599M61 120V96.4M61 25.6V2"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesMyLocationBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
