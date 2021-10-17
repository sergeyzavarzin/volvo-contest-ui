import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFilesDocumentBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 80 98" fill="none" ref={svgRef} {...props}>
      <Path
        d="M76.226 24.928L55.038 3.695A5.576 5.576 0 0051.068 2H6.46A4.46 4.46 0 002 6.46v84.754a4.46 4.46 0 004.46 4.46h66.911a4.46 4.46 0 004.461-4.46v-62.45a5.04 5.04 0 00-1.606-3.836v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M51.068 2v22.303a4.46 4.46 0 004.46 4.461h22.304M15.382 77.832H64.45M15.382 64.45H64.45M15.382 51.068H64.45"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilesDocumentBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
