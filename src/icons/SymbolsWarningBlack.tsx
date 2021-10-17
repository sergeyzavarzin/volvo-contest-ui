import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsWarningBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 109 116" fill="none" ref={svgRef} {...props}>
      <Path
        d="M44.218 12.96L3.348 89.5a11.45 11.45 0 0010.1 16.84h81.16a11.452 11.452 0 0010.1-16.84l-40.87-76.53a11.23 11.23 0 00-9.81-5.63 11.08 11.08 0 00-9.81 5.62v0z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M59.079 89.729c0-2.232-1.063-3.295-2.977-3.295h-4.145c-2.02 0-3.082 1.063-3.082 3.295v2.87c0 2.338 1.063 3.401 3.082 3.401h4.145c1.914 0 2.977-1.063 2.977-3.401v-2.87zm.212-65.156v-.425c0-2.126-1.063-3.082-3.082-3.082H51.85c-1.913 0-3.083.956-3.083 3.082v.425l1.17 47.512c.106 2.338 1.063 3.507 3.082 3.507h2.232c1.913 0 2.764-1.169 2.87-3.507l1.17-47.512z"
        fill="#000"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsWarningBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
