import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPinBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 62 93" fill="none" ref={svgRef} {...props}>
      <Path
        d="M60 55.717v4.297H2v-4.297c0-5.972 6.917-10.74 12.889-10.74l5.241-31.235a4.942 4.942 0 01-5.241-5.284V4.162a1.977 1.977 0 012.148-2.148h30.074a1.934 1.934 0 012.148 2.148v4.296a5.113 5.113 0 01-5.456 5.284l5.456 31.234A10.699 10.699 0 0160 55.717v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M31.99 60.743v29.343"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPinBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
