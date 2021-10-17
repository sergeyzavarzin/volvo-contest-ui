import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsCBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M78.024 67.675a22.218 22.218 0 01-22.807 15.253c-15.303 0-26.24-11.28-26.24-29.428 0-20.208 13.487-29.429 25.994-29.429a22.807 22.807 0 0121.827 14.126l-5.445 2.501a17.411 17.411 0 00-16.578-11.182c-10.398 0-19.276 8.19-19.276 23.935 0 14.322 7.554 23.837 19.62 23.837a16.774 16.774 0 0016.97-11.428l5.935 1.815z"
        fill="#000"
      />
      <Path
        d="M53.5 105c28.443 0 51.5-23.057 51.5-51.5S81.943 2 53.5 2 2 25.057 2 53.5 25.057 105 53.5 105z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsCBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
