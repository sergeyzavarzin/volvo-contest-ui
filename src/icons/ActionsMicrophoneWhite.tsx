import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsMicrophoneWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 53 97" fill="none" ref={svgRef} {...props}>
      <Path d="M26.264 94.969v-16.5" stroke="#fff" strokeWidth={4} strokeLinejoin="round" />
      <Path
        d="M35.565 94.97H16.963M2.08 44.744v7.562a24.263 24.263 0 1048.366 0v-7.542"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.324 2A16.176 16.176 0 0142.5 18.176v34.373a16.175 16.175 0 01-16.176 16.175v0A16.176 16.176 0 0110.148 52.55V18.176A16.175 16.175 0 0126.324 2v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsMicrophoneWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
