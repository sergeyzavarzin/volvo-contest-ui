import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsMailBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 108 68" fill="none" ref={svgRef} {...props}>
      <Path
        d="M103.54 64.2L63.72 35.73M43.66 35.73L3.85 64.2M105.31 59.07c0 3.7-3.32 6.72-7.38 6.72H9.38c-4.06 0-7.38-3-7.38-6.72V8.71C2 5 5.31 2 9.38 2h88.53c4.06 0 7.38 3 7.38 6.71l.02 50.36z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path d="M2 5.54L53.69 43l51.7-37.41" stroke="#000" strokeWidth={4} strokeMiterlimit={10} />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsMailBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
