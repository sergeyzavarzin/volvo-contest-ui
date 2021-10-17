import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsEuroWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 103 103" fill="none" ref={svgRef} {...props}>
      <Path
        d="M55.714 59.786h-18.26c2.06 9.364 7.773 14.701 16.621 14.701a16.668 16.668 0 0014.373-7.678l3.98 3.184A21.629 21.629 0 0153.7 79.356 22.332 22.332 0 0131.086 59.6H23.41v-4.682h7.117v-3.745a27.341 27.341 0 010-3.933h-7.117v-4.682h7.725A22.847 22.847 0 0154.17 23.408a21.537 21.537 0 0117.884 8.802l-4.4 3.558a16.012 16.012 0 00-13.531-7.397c-8.334 0-14.42 5.244-16.527 14.748h18.119V47.8H36.987a35.03 35.03 0 000 3.886v3.792h18.727v4.307z"
        fill="#fff"
      />
      <Path
        d="M51.5 100.659c27.15 0 49.159-22.01 49.159-49.16 0-27.149-22.01-49.158-49.16-49.158C24.35 2.34 2.342 24.35 2.342 51.5c0 27.15 22.01 49.159 49.159 49.159z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsEuroWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
