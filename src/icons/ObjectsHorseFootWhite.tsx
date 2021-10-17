import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsHorseFootWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 102 102" fill="none" ref={svgRef} {...props}>
      <Path
        d="M98.252 57.753L67.679 88.235a38.556 38.556 0 01-54.433 0 38.557 38.557 0 010-54.433L43.774 3.275a4.536 4.536 0 016.305 0l9.752 9.752a4.536 4.536 0 010 6.26L29.303 49.86a15.785 15.785 0 000 22.408v0a15.786 15.786 0 0022.409 0L82.285 41.74a4.536 4.536 0 016.26 0l9.752 9.753a4.536 4.536 0 01-.045 6.26zM34.066 12.89L50.08 28.95M72.535 51.403l16.058 16.012"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsHorseFootWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
