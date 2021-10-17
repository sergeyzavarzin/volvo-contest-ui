import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorld2FingersBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 65 109" fill="none" ref={svgRef} {...props}>
      <Path
        d="M8.551 56.58L3.05 9.981a6.944 6.944 0 015.808-7.904v0a6.987 6.987 0 017.948 5.852l4.848 37.731L35.627 7.493a6.987 6.987 0 018.734-4.629v0a6.943 6.943 0 014.63 8.734L34.754 55.575"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M47.854 59.943l3.712-9.083a7.075 7.075 0 00-4.367-8.997l-6.507-2.227M43.88 75.227a7.685 7.685 0 004.672 4.979 7.075 7.075 0 008.734-4.105l5.24-13.538a8.734 8.734 0 00-5.414-11.093l-4.892-1.703-4.06 10.175"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M60.257 69.681v16.202a20.874 20.874 0 01-20.918 20.919h-16.42A20.918 20.918 0 012 85.883V66.93a11.355 11.355 0 0111.398-11.354h28.255a9.302 9.302 0 019.302 9.302 9.302 9.302 0 01-9.302 9.17H21.652"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M36.981 90.512a16.289 16.289 0 00-16.289-16.464h-2.358"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorld2FingersBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
