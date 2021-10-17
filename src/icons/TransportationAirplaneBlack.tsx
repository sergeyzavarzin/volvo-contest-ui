import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTransportationAirplaneBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 131 87" fill="none" ref={svgRef} {...props}>
      <Path
        d="M97.205 57.806C97.205 77.823 82.997 85 65.47 85c-17.528 0-31.735-7.323-31.735-27.194 0-11.67 10.79-23.63 19.822-31.54a17.576 17.576 0 0123.826 0c9.032 7.91 19.822 19.87 19.822 31.54zM65.47 21.53V2M2 31.294l41.5 4.882M128.94 31.294l-41.5 4.882M115.514 53.264a8.544 8.544 0 008.544-8.544 8.544 8.544 0 10-17.088 0 8.544 8.544 0 008.544 8.544zM15.426 53.264a8.544 8.544 0 100-17.088 8.544 8.544 0 000 17.088zM53.264 41.059h24.412"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransportationAirplaneBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
