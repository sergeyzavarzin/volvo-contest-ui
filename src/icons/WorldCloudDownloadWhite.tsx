import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldCloudDownloadWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 111 72" fill="none" ref={svgRef} {...props}>
      <Path
        d="M59 29v28M72 44.125l-13 13-13-13"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M108.619 50.47a18.952 18.952 0 01-1.436 7.281 18.954 18.954 0 01-10.294 10.294 18.969 18.969 0 01-7.282 1.436H22.009a19.037 19.037 0 01-1.944-38.024 12.672 12.672 0 010-2.197 14.787 14.787 0 0114.618-14.703 14.407 14.407 0 018.45 2.662A25.35 25.35 0 0191.72 27.232a24.038 24.038 0 01-.38 4.225 18.971 18.971 0 0117.28 19.012v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldCloudDownloadWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
