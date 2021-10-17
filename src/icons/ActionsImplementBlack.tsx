import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsImplementBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 118 109" fill="none" ref={svgRef} {...props}>
      <Path
        d="M109.11 42.977A52.366 52.366 0 0060.352 2.053 52.37 52.37 0 008.11 38.427M6.08 61.177a52.37 52.37 0 00102.49 6.83"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.59 38.507l-13.36 3.17a1.71 1.71 0 01-2.06-1.26L2 27.057M115.73 79.377l-4.84-12.85a1.707 1.707 0 00-2.2-1l-12.83 4.85"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M47.08 54.297a12.17 12.17 0 1124.34.02 12.17 12.17 0 01-24.34-.02v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M61.8 86.517h-5.07c-1.57 0-2.57-1.27-2.85-2.85l-.95-5.41a24.857 24.857 0 01-6.14-2.56l-4.55 3.22a3.2 3.2 0 01-3.88-.16l-3.63-3.56a3 3 0 010-4l3.16-4.44a23.848 23.848 0 01-2.51-6.09l-5.65-.99a3 3 0 01-2.7-2.82v-5.1c0-1.57 1.25-2.55 2.85-2.84l5.53-.94a24.73 24.73 0 012.51-6l-3.29-4.68a3 3 0 01.1-3.88l3.61-3.61a3.08 3.08 0 014 0l4.49 3.17a24.25 24.25 0 016-2.51l1-5.72a3 3 0 012.9-2.66h5.1a3 3 0 012.85 2.84l.93 5.5a25.19 25.19 0 016.09 2.5l4.59-3.24a3.17 3.17 0 013.88.12l3.56 3.61a3 3 0 010 4l-3.1 4.41a24.942 24.942 0 012.56 6.12l5.63 1a3 3 0 012.65 2.81v5.1c0 1.56-1.28 2.54-2.85 2.84l-5.38.93a24.5 24.5 0 01-2.51 6.13l3.18 4.52a3 3 0 01-.18 3.91l-3.59 3.57a3.09 3.09 0 01-4 0l-4.41-3a24.14 24.14 0 01-6.17 2.55l-.93 5.55a3 3 0 01-2.83 2.66v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsImplementBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
