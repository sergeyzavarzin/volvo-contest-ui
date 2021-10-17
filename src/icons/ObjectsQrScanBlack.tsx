import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsQrScanBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 95" fill="none" ref={svgRef} {...props}>
      <Path
        d="M4.396 33.131a16.763 16.763 0 0116.763-16.763h40.71v33.526H21.16A16.763 16.763 0 014.396 33.132v0zM16.368 49.895L2 76.237l11.926 8.525a5.363 5.363 0 007.759-1.724l18.63-33.143M52.29 49.895v9.818a9.578 9.578 0 01-9.34 9.34H30.737"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M81.026 69.052h23.948M81.026 83.42h23.948M81.026 93h23.948M81.026 59.474h23.948M81.026 45.105h23.948M81.026 35.526h23.948M81.026 25.948h23.948M81.026 11.58h23.948M81.026 2h23.948"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsQrScanBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
