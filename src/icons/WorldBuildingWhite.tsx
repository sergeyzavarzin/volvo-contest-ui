import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldBuildingWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 96 92" fill="none" ref={svgRef} {...props}>
      <Path
        d="M86.832 2H8.878v87.125h77.954V2zM2 89.125h91.71M22.635 15.757v4.585M31.806 15.757v4.585M22.635 29.513V34.1M31.806 29.513V34.1M31.806 43.27v4.585M22.635 43.27v4.585M22.635 57.026v4.586M40.977 15.757v4.585M50.148 15.757v4.585M40.977 29.513V34.1M50.148 29.513V34.1M40.977 43.27v4.585M73.076 15.757v4.585M73.076 29.513V34.1"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M73.075 66.197H59.32v22.928h13.756V66.197z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldBuildingWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
