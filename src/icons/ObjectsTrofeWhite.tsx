import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsTrofeWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 84 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M20.698 83.397H62.56a4.651 4.651 0 014.651 4.651v11.628H15.954V88.048a4.653 4.653 0 014.744-4.651v0zM15.954 2h51.163v39.535a25.581 25.581 0 01-25.581 25.582v0a25.581 25.581 0 01-25.582-25.582V2z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M34.558 67.117v9.628a6.652 6.652 0 01-6.651 6.651H22.93M48.512 67.117v9.628a6.652 6.652 0 006.65 6.651h4.978M10.605 36.884h5.349V6.65H6.65A4.651 4.651 0 002 11.302l1.442 18.605a7.21 7.21 0 007.163 6.977v0zM72.465 36.884h-5.349V6.65h9.303a4.651 4.651 0 014.65 4.651l-1.441 18.605a7.21 7.21 0 01-7.163 6.977v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsTrofeWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
