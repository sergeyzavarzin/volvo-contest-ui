import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsMicrophoneOffBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 77 97" fill="none" ref={svgRef} {...props}>
      <Path d="M38.372 96.97V79.5" stroke="#000" strokeWidth={4} strokeLinejoin="round" />
      <Path
        d="M47.667 94.97h-18.59M61.528 59.387a24.73 24.73 0 001.01-7.073v-7.537M14.204 46.777v7.558a24.248 24.248 0 0024.248 24.47 23.783 23.783 0 0014.145-4.688M22.207 21.459v-3.294a16.166 16.166 0 0132.33 0v34.352"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M46.272 66.66a15.923 15.923 0 01-7.86 2.022v0a16.165 16.165 0 01-16.166-16.166v-9.254"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.123l72.744 72.744"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsMicrophoneOffBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
