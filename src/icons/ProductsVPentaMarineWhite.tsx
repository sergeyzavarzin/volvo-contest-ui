import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductsVPentaMarineWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 114 73" fill="none" ref={svgRef} {...props}>
      <Path
        d="M11.77 29.71l9-26.69c9.5-1.36 60.83-1.36 70.33 0l9 26.67M55.92 17.33v38.82"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.71 56.11c-4.2-8.82-7.2-18-6-22.79.94-3.71 46.18-15.69 46.18-15.69 2.635-.58 5.365-.58 8 0 0 0 45.24 12 46.18 15.69 1.23 4.83-1.76 14-6 22.79"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 72.11a12.82 12.82 0 0010.93-5.79 12.84 12.84 0 0010.93 5.79 12.819 12.819 0 0010.91-5.79 13.21 13.21 0 0021.86 0 13.21 13.21 0 0021.86 0 13.22 13.22 0 0021.87 0 12.814 12.814 0 0010.95 5.79"
        stroke="#fff"
        strokeWidth={0.15}
        strokeMiterlimit={10}
      />
      <Path
        d="M2 70.92a12.821 12.821 0 0010.93-5.81 12.84 12.84 0 0010.93 5.79 12.82 12.82 0 0010.91-5.79 13.21 13.21 0 0021.86 0 13.21 13.21 0 0021.86 0 13.221 13.221 0 0021.87 0 12.817 12.817 0 0010.93 5.79"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductsVPentaMarineWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
