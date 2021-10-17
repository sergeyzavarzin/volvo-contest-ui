import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinanceLegalBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 96" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2.017 51.701l16.567-41.417L35.15 51.7M18.584 10.284h66.268M51.717 93.119V2M35.15 93.119h33.134M35.148 51.701a15.906 15.906 0 01-16.567 16.567A15.904 15.904 0 012.014 51.701h33.134zM68.284 51.701l16.567-41.417L101.418 51.7M101.416 51.701a15.907 15.907 0 01-10.118 15.497 15.903 15.903 0 01-6.449 1.07 15.904 15.904 0 01-16.567-16.567h33.134z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinanceLegalBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
