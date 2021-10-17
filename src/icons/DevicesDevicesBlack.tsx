import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDevicesDevicesBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 109 69" fill="none" ref={svgRef} {...props}>
      <Path
        d="M48.571 55.425H9.123V6.645c0-1.231.49-2.413 1.36-3.284A4.639 4.639 0 0113.764 2h67.294a5.01 5.01 0 014.64 4.646M48.301 67h-37.04C6.63 67 2 64.685 2 60.148v-4.723h46.301"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M81.017 67H55.425l.046-53.425h41.803V27.42"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M106.178 34.945H87.48V67h18.698V34.945z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M76.35 62.548a2.226 2.226 0 100-4.452 2.226 2.226 0 000 4.452zM96.829 62.548a2.226 2.226 0 100-4.452 2.226 2.226 0 000 4.452z"
        fill="#000"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDevicesDevicesBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
