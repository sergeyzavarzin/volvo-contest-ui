import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsWrenchBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 97 98" fill="none" ref={svgRef} {...props}>
      <Path
        d="M14.579 96c6.947 0 12.578-5.631 12.578-12.578 0-6.947-5.631-12.579-12.578-12.579C7.632 70.843 2 76.475 2 83.422 2 90.369 7.632 96 14.579 96z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.178 70.43L52.77 33.838A22.139 22.139 0 0157.161 8.68a21.91 21.91 0 0130.463-1.006l-19.21 7.181a17.336 17.336 0 006.403 17.29l19.348-7.135a22.87 22.87 0 01-6.54 14.133 22.23 22.23 0 01-22.871 5.49L27.476 81.864"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsWrenchBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
