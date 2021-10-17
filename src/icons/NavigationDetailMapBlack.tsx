import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNavigationDetailMapBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 102 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M35.423 94L2.986 82.59V7.282l32.437 11.41V94zM67.198 78.014L35.423 94V18.634L67.198 2.648v75.366z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M9.606 43.028l19.859 13.24"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeDasharray="20 30"
      />
      <Path
        d="M36.085 58.254l27.14-14.564"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeDasharray="20 35"
      />
      <Path
        d="M74.93 6.936l-7.733-4.288V77.39L99.635 94V44.594"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M98.972 23.38c0 4.086-4.82 11.342-8.242 16.534a3.98 3.98 0 01-1.443 1.314 4.027 4.027 0 01-3.8 0 3.98 3.98 0 01-1.443-1.314c-3.422-5.196-8.242-12.453-8.242-16.534 0-3.04 1.22-5.956 3.393-8.106a11.644 11.644 0 018.19-3.358c3.073 0 6.02 1.207 8.192 3.357a11.408 11.408 0 013.395 8.107z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M87.057 27.803a4.634 4.634 0 100-9.268 4.634 4.634 0 000 9.268z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M74.48 44.352l16.548 8.606"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="20 30"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigationDetailMapBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
