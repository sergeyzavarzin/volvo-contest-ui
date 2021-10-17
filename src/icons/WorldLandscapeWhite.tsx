import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldLandscapeWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 108 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 93.08h103.38M46.31 73.79a7.799 7.799 0 11-15.59 0c0-4.3 7.79-20.1 7.79-20.1s7.8 15.8 7.8 20.1zM38.1 83.23v9.85M22.51 73.79a7.8 7.8 0 11-15.59 0c0-4.3 7.8-32.41 7.8-32.41s7.79 28.11 7.79 32.41zM14.31 83.23v9.85M2 31.54l24.61-19.69 32.01 39.38 19.69-14.77L105.39 66M77.08 19.24a8.62 8.62 0 100-17.24 8.62 8.62 0 000 17.24z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldLandscapeWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
