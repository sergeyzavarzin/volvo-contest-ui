import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldHandStopBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 95 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M65.347 85.24a20.844 20.844 0 00-26.16-13.68l-2.873.879M92.13 48.038V77.05c0 16.982-10.721 27.875-23.93 27.875"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M47.1 51.318V9.505a7.505 7.505 0 0115.01 0v41.813"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M32.091 68.472v-50.39a7.505 7.505 0 0115.01 0v33.236M62.11 51.318V18.082a7.505 7.505 0 1115.01 0v35.38"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M77.12 53.462V28.803a7.505 7.505 0 0115.01 0v41.813M68.543 104.924H57.82a31.038 31.038 0 01-22-9.135L4.236 64.14A7.543 7.543 0 1114.85 53.42l21.443 19.298"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldHandStopBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
