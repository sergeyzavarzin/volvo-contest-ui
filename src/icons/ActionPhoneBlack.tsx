import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionPhoneBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M91.86 90.087c-13.807 13.753-43.553 6.397-66.422-16.525C2.57 50.64-4.84 20.947 8.913 7.14l1.92-1.866 1.492-1.546a5.864 5.864 0 018.316 0L38.71 21.8a5.865 5.865 0 010 8.316l-7.142 7.197-1.44 1.386A65.673 65.673 0 0042.87 56.13a59.703 59.703 0 0022.816 14.926l1.653-1.706 5.33-5.33a5.864 5.864 0 018.316 0l14.287 14.34a5.864 5.864 0 010 8.315l-1.493 1.493-1.919 1.919z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionPhoneBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
