import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldCityBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 103 98" fill="none" ref={svgRef} {...props}>
      <Path
        d="M53.69 11.85H9.38v83.69h44.31V11.85zM93.12 26.62H63.54v68.92h29.58V26.62zM2 95.54h98.46M68.46 26.61v-9.84h19.69v9.84M78.31 16.77V2M21.69 21.69v4.93M31.54 21.69v4.93M21.69 36.46v4.92M31.54 36.46v4.92M21.69 51.23v4.92"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldCityBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
