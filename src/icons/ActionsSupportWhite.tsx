import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsSupportWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 108" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 46.31v27.07M110.31 46.31v27.07M11.84 63.16V45.25C11.84 21.37 31.68 2 56.15 2c24.47 0 44.31 19.37 44.31 43.25v9.51M65.64 100.09h9.46s24.07-1.57 25.36-24v-3.77M48.8 95.54h11.12a4.002 4.002 0 014 4.1v1.65a4.003 4.003 0 01-2.446 3.786 3.99 3.99 0 01-1.554.314H48.8a3.99 3.99 0 01-2.864-1.207 4.004 4.004 0 01-1.136-2.893v-1.67a3.998 3.998 0 014-4.08v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsSupportWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
