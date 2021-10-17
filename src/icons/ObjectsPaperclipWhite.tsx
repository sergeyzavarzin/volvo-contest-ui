import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPaperclipWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 86 93" fill="none" ref={svgRef} {...props}>
      <Path
        d="M64.388 74.171L18.705 28.672a6.507 6.507 0 010-9.782v0a6.506 6.506 0 019.783 0l47.344 47.16a12.967 12.967 0 010 19.565 13.012 13.012 0 01-19.611 0L10.583 39.932C1.631 31.026.016 17.828 8.923 8.922c8.905-8.906 22.103-7.29 31.009 1.661L84 54.606"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPaperclipWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
