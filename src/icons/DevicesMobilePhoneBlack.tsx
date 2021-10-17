import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDevicesMobilePhoneBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 58 99" fill="none" ref={svgRef} {...props}>
      <Path
        d="M53.82 96.346H4.366a1.888 1.888 0 01-2.338-2.158V4.275a1.978 1.978 0 012.158-2.248H53.64a2.023 2.023 0 012.338 2.248v89.913a1.887 1.887 0 01-2.158 2.158v0zM55.98 78.453H2.03"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M29.005 89.692a2.248 2.248 0 100-4.496 2.248 2.248 0 000 4.496z" fill="#000" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDevicesMobilePhoneBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
