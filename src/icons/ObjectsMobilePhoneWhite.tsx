import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsMobilePhoneWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 69 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M63.547 104.17H4.467a2.172 2.172 0 01-1.786-.571 2.163 2.163 0 01-.674-1.749V4.34a2.17 2.17 0 012.46-2.32h59.08a2.17 2.17 0 012.46 2.32v97.51a2.167 2.167 0 01-.675 1.749 2.169 2.169 0 01-1.785.571v0z"
        stroke="#fff"
        strokeWidth={3.88}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M66.007 84.48h-64"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M34.007 96.79a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z" fill="#fff" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsMobilePhoneWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
