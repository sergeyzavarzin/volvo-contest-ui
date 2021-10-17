import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSustainabilityEvChargeWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 105 106" fill="none" ref={svgRef} {...props}>
      <Path
        d="M59.688 50.12c5.865 0 10.433 1.876 10.433 8.894v25.287a11.443 11.443 0 0011.73 11.73c5.48 0 14.422-2.163 13.845-13.797a79.17 79.17 0 00-1.106-8.461s-3.654-26.73-3.654-33.267"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M59.689 100.599V6.807A4.807 4.807 0 0054.88 2H11.615a4.807 4.807 0 00-4.807 4.807V100.6M2 103.002h62.496M102.954 21.277v7.21a11.065 11.065 0 01-3.192 8.827 11.058 11.058 0 01-8.826 3.192v0a11.057 11.057 0 01-12.019-12.018v-7.211h24.037zM83.725 18.873v-7.211M98.147 18.873v-7.211"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.44 78.965L45.266 50.12h-19.23"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35.651 30.891L18.826 59.735h19.23"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSustainabilityEvChargeWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
