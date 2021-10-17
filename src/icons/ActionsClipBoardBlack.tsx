import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsClipBoardBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 102 80" fill="none" ref={svgRef} {...props}>
      <Path
        d="M40.8 11.84h58.66M40.8 43.84H88M40.8 73.38h56.19M2 68.49l7.06 9.41 11.76-16.47M2 38.77l7.06 9.41 11.76-16.46M2 9.06l7.06 9.41L20.82 2"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsClipBoardBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
