import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsTimerWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 68 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M8.84 2v13.679S6.56 36.196 33.918 49.875c0 0 25.077 11.262 25.077 34.196V97.75"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.84 97.75V84.071S6.56 63.554 33.918 49.875c0 0 25.077-11.262 25.077-34.196V2M2 2h63.833M2 97.75h63.833"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.84 88.632l13.678-10.077a19.013 19.013 0 0122.433 0L58.63 88.632M13.4 29.357L25.8 34.874a20.107 20.107 0 0016.232 0l12.402-5.517"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsTimerWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
