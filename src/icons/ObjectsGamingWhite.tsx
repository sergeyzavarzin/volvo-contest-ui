import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsGamingWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 73" fill="none" ref={svgRef} {...props}>
      <Path
        d="M32.169 14.93v17.239M23.549 23.55h17.239"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M73.111 30.014a6.465 6.465 0 100-12.93 6.465 6.465 0 000 12.93z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M96.816 21.394l4.31 35.6a13.975 13.975 0 01-4.09 9.916A13.964 13.964 0 0187.119 71v0a13.963 13.963 0 01-13.792-11.68l-2.37-14.222H32.169l-2.155 14.18a13.964 13.964 0 01-13.792 11.679v0A13.963 13.963 0 012 56.95l4.31-35.556C8.465 10.62 14.973 2 25.704 2h51.718c10.731 0 17.239 8.62 19.394 19.394z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsGamingWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
