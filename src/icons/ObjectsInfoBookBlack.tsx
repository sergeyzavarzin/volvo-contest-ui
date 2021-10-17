import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsInfoBookBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 76" fill="none" ref={svgRef} {...props}>
      <Path
        d="M96.737 74c-3.79-5.684-10.61-9.474-23.684-9.474-13.074 0-19.895 3.79-23.685 9.474-3.79-5.684-10.61-9.474-23.684-9.474C12.61 64.526 5.79 68.316 2 74V11.474C5.79 5.789 12.61 2 25.684 2c13.074 0 19.895 3.79 23.684 9.474C53.158 5.789 59.978 2 73.053 2c13.073 0 19.894 3.79 23.684 9.474V74zM49.37 11.474V74"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M75.894 15.263h-3.79v6.632h3.79v-6.632zM78.737 49.368h-2.842V26.631h-6.746v3.752h2.956v18.985H69.15v3.79h9.588v-3.79z"
        fill="#000"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsInfoBookBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
