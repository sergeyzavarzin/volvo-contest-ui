import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsNewspaperWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 108 79" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 10.278h12.417v60.014a6.208 6.208 0 11-12.417 0V10.278z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M14.416 14.417V2h91.056v70.361a4.14 4.14 0 01-4.139 4.139H8.208"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M59.944 14.417H26.833v24.916h33.111V14.417z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M72.361 14.417h20.695M72.361 26.833h20.695M72.361 39.25h20.695M26.833 51.667h66.222M26.833 64.083h66.222"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsNewspaperWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
