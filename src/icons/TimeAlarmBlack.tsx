import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTimeAlarmBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 105 113" fill="none" ref={svgRef} {...props}>
      <Path
        d="M52.158 110.236c27.702 0 50.159-22.456 50.159-50.158S79.86 9.919 52.159 9.919C24.456 9.92 2 32.376 2 60.078c0 27.702 22.457 50.158 50.158 50.158z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M25.76 60.08h26.398V28.348M2 110.237l15.84-13.2M102.317 110.237l-15.84-13.2M2 17.84L23.12 2M102.318 17.84L81.198 2"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTimeAlarmBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
