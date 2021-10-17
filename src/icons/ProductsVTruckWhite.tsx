import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductsVTruckWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 97" fill="none" ref={svgRef} {...props}>
      <Path
        d="M89.804 71.69l-12.44 4.26 4.33-13.79"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M80.414 87.19v6.97h6.88v-7" fill="#fff" />
      <Path
        d="M80.414 87.19v6.97h6.88v-7"
        stroke="#fff"
        strokeWidth={4.92}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.054 2c-2.6 0-5.06.61-6.55 1.94-.87.78-2.69 2.52-4.09 4a7.83 7.83 0 00-1.81 4.19s-1.62 21.12-1.62 25.57v45.51a3.27 3.27 0 003.21 3.27h74.83a3.25 3.25 0 003.19-3.27V37.7c0-4.45-1.61-25.57-1.61-25.57a7.83 7.83 0 00-1.81-4.19 83.89 83.89 0 00-4.07-4C83.234 2.61 80.784 2 78.184 2h-53.13zM93.644 36.59h6a1.698 1.698 0 001.74-1.82l-1.19-17.52a1.998 1.998 0 00-2-1.81h-6M10.564 36.59h-6.81a1.7 1.7 0 01-1.75-1.81l1.19-17.53a2 2 0 012-1.81h6.81"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M15.914 87.16v7h6.92v-6.97" fill="#fff" />
      <Path
        d="M15.914 87.16v7h6.92v-6.97"
        stroke="#fff"
        strokeWidth={4.92}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.534 65.36h37.12M37.174 74.96h27.84"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M57.144 44.65h-33a.897.897 0 00-.91.9v8.59a.88.88 0 00.91.88h5.28c.28-.09 27.72-10.37 27.72-10.37zM78.053 44.65h-5l-27.53 10.37h32.53a.86.86 0 00.89-.88v-8.59a.89.89 0 00-.89-.9v0z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.96}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.324 71.69l12.44 4.26-4.33-13.79"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductsVTruckWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
