import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsHashtagWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M32.753 82.929l3.041-15.009h-9.81v-4.905h10.791l3.63-18.638h-9.81v-4.905h10.889l2.943-15.008h5.69l-2.845 15.008h17.657l2.942-15.4h5.69L70.618 39.08h9.81v4.905H69.686L65.96 62.623h9.81v4.905h-10.84l-2.845 15.4h-5.788L59.24 67.92H41.484L38.786 82.93h-6.033zm27.516-20.11l3.63-18.638H46.143L42.416 62.82h17.853z"
        fill="#fff"
      />
      <Path
        d="M53.5 105c28.443 0 51.5-23.057 51.5-51.5S81.943 2 53.5 2 2 25.057 2 53.5 25.057 105 53.5 105z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsHashtagWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
