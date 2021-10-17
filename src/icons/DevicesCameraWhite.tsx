import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDevicesCameraWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 79" fill="none" ref={svgRef} {...props}>
      <Path
        d="M49.5 63.072c11.243 0 20.357-9.115 20.357-20.358S60.743 22.357 49.5 22.357c-11.243 0-20.357 9.114-20.357 20.357 0 11.243 9.114 20.358 20.357 20.358zM11.047 22.357h15.834"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M69.857 13.31L63.071 2H35.93l-6.786 11.31H6.523A4.524 4.524 0 002 17.832V72.12a4.524 4.524 0 004.524 4.524h85.952A4.524 4.524 0 0097 72.119V17.833a4.524 4.524 0 00-4.524-4.523H69.857z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDevicesCameraWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
