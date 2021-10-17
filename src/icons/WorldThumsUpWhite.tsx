import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldThumsUpWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 101 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M98.287 39.558H81.856v49.295h16.431V39.558z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M79.51 41.905l-10.517-3.521a10.516 10.516 0 01-5.634-4.32L52.421 17.68a11.17 11.17 0 01-1.597-3.474L47.82 5.474A5.117 5.117 0 0043.125 2h-1.174a9.39 9.39 0 00-9.39 9.39v0a26.995 26.995 0 002.348 14.084l7.042 9.389H15.473a8.732 8.732 0 00-8.732 8.732v5.352A4.694 4.694 0 002.046 54.3v4.038a7.042 7.042 0 007.042 7.042v7.042a7.042 7.042 0 007.042 7.042v6.385a7.654 7.654 0 007.7 7.699h23.098c2.904-.01 5.777-.6 8.45-1.737l8.028-3.427a22.627 22.627 0 019.108-1.878h9.39"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldThumsUpWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
