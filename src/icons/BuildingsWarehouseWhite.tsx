import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBuildingsWarehouseWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 102 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M97.89 26.463a5.865 5.865 0 012.108 4.549v60.476a5.575 5.575 0 01-5.352 5.731H89.94a5.574 5.574 0 01-5.43-5.73V33.062h-67.1v58.425a5.575 5.575 0 01-5.374 5.731H7.354a5.575 5.575 0 01-5.352-5.73V31.011a5.865 5.865 0 012.108-4.55L50.939 2 97.89 26.463z"
        stroke="#fff"
        strokeWidth={3.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M72.1 74.73H61.43a5.686 5.686 0 00-5.686 5.686v10.67a5.686 5.686 0 005.687 5.687H72.1a5.686 5.686 0 005.686-5.686v-10.67a5.686 5.686 0 00-5.686-5.687zM72.1 51.505H61.43a5.686 5.686 0 00-5.686 5.686v10.67a5.686 5.686 0 005.687 5.687H72.1a5.686 5.686 0 005.686-5.686v-10.67a5.686 5.686 0 00-5.686-5.687zM50.047 74.73h-10.67a5.686 5.686 0 00-5.687 5.686v10.67a5.686 5.686 0 005.686 5.687h10.67a5.686 5.686 0 005.687-5.686v-10.67a5.686 5.686 0 00-5.686-5.687z"
        stroke="#fff"
        strokeWidth={3.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuildingsWarehouseWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
