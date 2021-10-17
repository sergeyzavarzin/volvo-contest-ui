import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFilesPdfWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
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
        d="M48.77 2v22.31a4.77 4.77 0 004.77 4.77h22.3"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.38 57.4c2.7 0 5.51-.06 8.33-.06 5.11 0 8.88 1.68 8.88 6.79 0 4.84-3.65 6.86-9.1 6.86h-4.13v7.32h-4l.02-20.91zm8.24 3.27h-4.26v6.95h4.26c3.61 0 4.77-1.34 4.77-3.49 0-2.15-1.16-3.46-4.77-3.46zM30.38 57.4h7c3.59 0 6.4.55 8.64 2.78a10.41 10.41 0 012.82 7.59 11 11 0 01-2.81 7.8c-2 2-4.75 2.76-8.45 2.76h-7.2V57.4zm3.95 17.48c1 .06 2.18.09 3.22.09 2.17 0 3.82-.12 5.2-1.53a7.61 7.61 0 001.9-5.6 7.74 7.74 0 00-2-5.54c-1.44-1.44-3-1.63-5.39-1.63h-3l.07 14.21zM53.69 57.4H68.2v3.21H57.67v5.94h9.15v3.09h-9.15v8.64h-4l.02-20.88z"
        fill="#fff"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilesPdfWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
