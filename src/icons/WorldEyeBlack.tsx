import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldEyeBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 112 72" fill="none" ref={svgRef} {...props}>
      <Path
        d="M55.656 57.839c12.335 0 22.335-10 22.335-22.336 0-12.335-10-22.335-22.335-22.335-12.336 0-22.336 10-22.336 22.335 0 12.336 10 22.336 22.336 22.336z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M107.475 30.634a7.371 7.371 0 010 9.739c-8.22 9.291-28.188 28.634-51.819 28.634-23.631 0-43.6-19.343-51.819-28.634a7.37 7.37 0 010-9.739C12.057 21.343 32.025 2 55.657 2c23.63 0 43.598 19.343 51.818 28.634z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M55.656 44.438a8.934 8.934 0 100-17.869 8.934 8.934 0 000 17.869z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldEyeBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
