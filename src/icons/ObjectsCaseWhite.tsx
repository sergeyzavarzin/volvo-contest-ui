import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgObjectsCaseWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 108 88" fill="none" ref={svgRef} {...props}>
      <G
        clipPath="url(#ObjectsCaseWhite_svg__clip0)"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}>
        <Path d="M98.76 16.77H8.62A6.62 6.62 0 002 23.39v55.68a6.62 6.62 0 006.62 6.62h90.14a6.62 6.62 0 006.62-6.62V23.39a6.62 6.62 0 00-6.62-6.62z" />
        <Path d="M40.77 2h25.85a6.77 6.77 0 016.77 6.77v76.92H34V8.77A6.77 6.77 0 0140.77 2v0z" />
      </G>
      <Defs>
        <ClipPath id="ObjectsCaseWhite_svg__clip0">
          <Path fill="#fff" d="M0 0h107.38v87.69H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsCaseWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
