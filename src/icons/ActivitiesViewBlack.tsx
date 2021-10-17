import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesViewBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 125 78" fill="none" ref={svgRef} {...props}>
      <Path
        d="M62.03 62.03c12.973 0 23.49-10.517 23.49-23.49 0-12.973-10.517-23.49-23.49-23.49-12.973 0-23.49 10.517-23.49 23.49 0 12.973 10.517 23.49 23.49 23.49z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M122.18 38.54S95.96 75.08 62.03 75.08 2 38.54 2 38.54 28.1 2 62 2s60.18 36.54 60.18 36.54z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M62.03 48.98c5.766 0 10.44-4.674 10.44-10.44 0-5.766-4.674-10.44-10.44-10.44-5.766 0-10.44 4.674-10.44 10.44 0 5.766 4.674 10.44 10.44 10.44z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesViewBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
