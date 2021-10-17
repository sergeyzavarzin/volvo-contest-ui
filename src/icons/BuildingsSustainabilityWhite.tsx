import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBuildingsSustainabilityWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 113 104" fill="none" ref={svgRef} {...props}>
      <Path
        d="M103.81 62.616a49.788 49.788 0 01-77.017 30.002A49.79 49.79 0 017.81 66.946M5.86 45.316a49.79 49.79 0 0197.44-6.49"
        stroke="#fff"
        strokeWidth={3.81}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.65 66.866l-12.7-3a1.61 1.61 0 00-1.95 1.2l-3 12.7M110.12 28.016l-4.6 12.21a1.629 1.629 0 01-2.09 1l-12.22-4.68M56.05 82.216c16.817 0 30.45-13.633 30.45-30.45s-13.633-30.45-30.45-30.45S25.6 34.949 25.6 51.766s13.633 30.45 30.45 30.45z"
        stroke="#fff"
        strokeWidth={3.81}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M35.54 29.256s-.37 5.9 1.24 8.37a13.21 13.21 0 0010.47 4.37s6 2.18 6.4 4.94c0 0-.44 6.11-4.66 7.71 0 0-7.27 3.35-8.58 5.53 0 0-6.34 4.13 8.18 21.12M64.69 22.546s1.62 6.48-1 10.19c0 0-4.22 4.91-4.08 8.16 0 0-1.16 11.06 5 14.36 0 0 5.53 6.5 3.64 10.87 0 0-6.38 11.83-5.3 15.3M76.87 30.546s-3.24 4.24-2.47 9.28c0 0 .62 7.3 4.59 11.22 0 0 3.14 3.44 5.76 4.63"
        stroke="#fff"
        strokeWidth={3.81}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuildingsSustainabilityWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
