import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsMailBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M53.5 105c28.443 0 51.5-23.057 51.5-51.5S81.943 2 53.5 2 2 25.057 2 53.5 25.057 105 53.5 105z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M68.46 67.38c-4.904 0-7.602-2.01-8.142-5.493a12.604 12.604 0 01-10.888 5.494 10.89 10.89 0 01-11.674-12.36c0-8.338 4.905-17.706 15.45-17.706a9.81 9.81 0 018.927 4.169l.687-3.434h5.395L65.272 53.5c-1.373 7.652 0 9.81 3.58 9.81 7.112 0 9.81-7.26 9.81-15.058 0-12.262-8.142-21.924-23.396-21.924A26.877 26.877 0 0027.996 53.5a23.542 23.542 0 0024.916 25.064 49.342 49.342 0 0015.94-2.55l.834 4.266a57.04 57.04 0 01-17.068 2.6 28.005 28.005 0 01-29.723-29.036 31.88 31.88 0 0132.911-32.127c16.676 0 28.251 10.987 28.251 25.898 0 10.79-5.1 19.766-15.597 19.766zM53.157 41.63c-7.504 0-9.81 7.652-9.81 13.096 0 5.445 2.11 8.29 6.867 8.29 8.044 0 10.252-8.093 10.252-13.243s-2.06-8.142-7.309-8.142z"
        fill="#000"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsMailBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
