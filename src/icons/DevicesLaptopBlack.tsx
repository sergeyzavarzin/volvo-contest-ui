import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDevicesLaptopBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 75" fill="none" ref={svgRef} {...props}>
      <Path
        d="M95.954 58.447h-79.9a4.7 4.7 0 01-4.7-4.7V6.7a4.7 4.7 0 014.7-4.7h79.9a4.7 4.7 0 014.7 4.7v47a4.712 4.712 0 01-1.36 3.354 4.7 4.7 0 01-3.34 1.393z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M2 58.4h108.1v4.7a9.4 9.4 0 01-9.4 9.4H11.4A9.4 9.4 0 012 63.1v-4.7z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDevicesLaptopBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
