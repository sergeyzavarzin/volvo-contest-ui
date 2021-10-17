import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeoplePersonWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 93 98" fill="none" ref={svgRef} {...props}>
      <Path
        d="M90.648 95.53c0-19.28 2.69-41.84-44.31-41.84S2.028 76.5 2.028 95.53"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M46.338 51.24c13.597 0 24.62-11.023 24.62-24.62C70.958 13.023 59.935 2 46.338 2c-13.598 0-24.62 11.023-24.62 24.62 0 13.597 11.022 24.62 24.62 24.62z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeoplePersonWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
