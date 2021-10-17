import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFilesLanscapeWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 78 98" fill="none" ref={svgRef} {...props}>
      <Path
        d="M74.13 24.9L52.92 3.71A5.87 5.87 0 0048.79 2h-42A4.77 4.77 0 002 6.77v84a4.77 4.77 0 004.77 4.77h64.3a4.77 4.77 0 004.77-4.77V29.04a5.85 5.85 0 00-1.71-4.14v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M48.77 2v22.31a4.77 4.77 0 004.77 4.77h22.3M14.31 83.23v-7.38L24.15 66l7.39 7.39 19.69-19.7 12.31 14.77v14.77H14.31zM21.69 56.15a7.38 7.38 0 100-14.76 7.38 7.38 0 000 14.76z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilesLanscapeWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
