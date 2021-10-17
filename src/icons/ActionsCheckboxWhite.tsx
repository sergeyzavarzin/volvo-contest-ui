import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsCheckboxWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 108 105" fill="none" ref={svgRef} {...props}>
      <Path
        d="M55.45 2H52.3C24.52 2 2 24.52 2 52.3v.01c0 27.78 22.52 50.3 50.3 50.3h3.15c27.78 0 50.3-22.52 50.3-50.3v-.01c0-27.78-22.52-50.3-50.3-50.3z"
        stroke="#fff"
        strokeWidth={4}
      />
      <Path
        d="M25.26 48.725l21.464 28.614L82.49 27.27"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsCheckboxWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
