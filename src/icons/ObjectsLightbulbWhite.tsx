import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsLightbulbWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 128 115" fill="none" ref={svgRef} {...props}>
      <Path
        d="M88.16 60.98A24.63 24.63 0 0175.85 82.4v13.14a2.46 2.46 0 01-2.46 2.45h-19.7a2.46 2.46 0 01-2.46-2.45V82.4a24.62 24.62 0 1136.93-21.42v0zM63.54 2v17.23M20.02 20.02l12.19 12.19M2 63.54h17.23M20.02 107.05l12.19-12.18M107.05 107.05L94.87 94.87M125.08 63.54h-17.23M107.05 20.02L94.87 32.21M51.23 105.38h24.62M53.69 112.77h19.69"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsLightbulbWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
