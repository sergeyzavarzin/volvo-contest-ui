import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsTrashcanBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 93 103" fill="none" ref={svgRef} {...props}>
      <Path
        d="M46.5 30.105v56.211M62.895 30.105v56.211M30.105 30.105v56.211M76.993 100.369H16.098a4.685 4.685 0 01-4.684-4.685V16.053h70.263v79.631a4.684 4.684 0 01-4.684 4.685zM2 16.053h89M67.579 16.053H25.42L30.105 2h32.79l4.684 14.053z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsTrashcanBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
