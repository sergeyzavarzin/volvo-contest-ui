import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsCertificateBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 98 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M34 63.54c9.515 0 17.23-7.714 17.23-17.23S43.514 29.08 34 29.08c-9.516 0-17.23 7.714-17.23 17.23S24.483 63.54 34 63.54z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M16.77 73.39H2V2h93.54v71.39H51.23"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M24.15 61.08v32L34 85.69l9.85 7.39v-32"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M16.77 14.31h64"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M63.54 36.46h17.23M63.54 46.31h17.23M63.54 56.15h17.23"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsCertificateBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
