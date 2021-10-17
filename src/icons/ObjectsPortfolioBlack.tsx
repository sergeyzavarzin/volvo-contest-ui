import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPortfolioBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 98 78" fill="none" ref={svgRef} {...props}>
      <Path
        d="M91.913 14.261H6.087A4.087 4.087 0 002 18.348v53.13a4.087 4.087 0 004.087 4.088h85.826A4.087 4.087 0 0096 71.479v-53.13a4.087 4.087 0 00-4.087-4.088z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M38.822 2h20.435a4.087 4.087 0 014.087 4.087v8.174H34.735V6.087A4.087 4.087 0 0138.822 2v0zM96 45.65a116.438 116.438 0 01-47 9.481A116.438 116.438 0 012 45.65M42.87 46.956h12.261"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPortfolioBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
