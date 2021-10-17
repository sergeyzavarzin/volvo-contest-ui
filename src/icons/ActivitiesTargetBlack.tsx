import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesTargetBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 108 108" fill="none" ref={svgRef} {...props}>
      <Path
        d="M82.763 10.918v13.378H96.14M91.682 2v13.378h13.378"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M51.816 64.698a6.69 6.69 0 11-9.454-9.454l6.243-6.421h-1.516A11.148 11.148 0 1058.237 59.97v-1.516l-6.421 6.243z"
        fill="#000"
      />
      <Path
        d="M71.613 44.809l-3.256 3.21a24.571 24.571 0 11-9.453-9.453l3.344-3.122a29.075 29.075 0 109.365 9.365z"
        fill="#000"
      />
      <Path
        d="M84.549 31.967l-3.211 3.21a41.872 41.872 0 018.116 24.794A42.364 42.364 0 1147.09 17.608a41.873 41.873 0 0124.794 8.116l3.21-3.21a46.956 46.956 0 109.455 9.453z"
        fill="#000"
      />
      <Path
        d="M47.089 59.97l35.674-35.674"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesTargetBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
