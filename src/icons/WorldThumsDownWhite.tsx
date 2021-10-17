import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldThumsDownWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 101 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 55.989h16.432V6.695H2v49.294z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.779 53.642l10.516 3.521a10.517 10.517 0 015.634 4.32l10.938 16.384a11.174 11.174 0 011.597 3.474l3.004 8.732a5.118 5.118 0 004.695 3.474h1.033a9.39 9.39 0 009.39-9.39 26.996 26.996 0 00-2.348-14.084l-7.042-9.389h26.478a8.733 8.733 0 008.873-8.732v-5.399a4.696 4.696 0 004.695-5.352v-3.99a7.042 7.042 0 00-7.042-7.043v-7.042a7.042 7.042 0 00-7.042-7.042V9.7A7.653 7.653 0 0076.458 2H53.36c-2.904.01-5.777.6-8.45 1.737l-8.028 3.427a22.629 22.629 0 01-9.06 1.878h-9.39"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldThumsDownWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
