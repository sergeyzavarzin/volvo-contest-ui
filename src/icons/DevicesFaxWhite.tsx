import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDevicesFaxWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 95" fill="none" ref={svgRef} {...props}>
      <Path
        d="M14.988 40.963H2.001v45.456a6.407 6.407 0 006.493 6.493h86.583a6.408 6.408 0 006.494-6.493V40.963H40.963M84.254 53.95h-4.329M84.254 66.938h-4.329M84.254 79.924h-4.329M71.267 53.95h-4.329M71.267 66.938h-4.329M71.267 79.924h-4.329M58.279 53.95h-4.33M58.279 66.938h-4.33M58.279 79.924h-4.33"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M34.47 19.316H21.396a6.45 6.45 0 00-6.45 6.45v52.037a6.45 6.45 0 006.45 6.45H34.47a6.45 6.45 0 006.45-6.45V25.767a6.45 6.45 0 00-6.45-6.45zM49.62 40.962V2h28.14l15.11 15.152v23.854"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M75.597 2v12.988a2.251 2.251 0 002.164 2.164h15.022"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDevicesFaxWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
