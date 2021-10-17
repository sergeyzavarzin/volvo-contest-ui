import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinanceChartWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 97 81" fill="none" ref={svgRef} {...props}>
      <Path
        d="M2 2v76.413h92.5"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.065 70.37V38.194l16.087-10.818a4.586 4.586 0 014.022-.563l12.91 4.343a4.585 4.585 0 005.067-1.608l14.157-18.903a4.505 4.505 0 015.067-1.568l15.082 5.027V70.41l-72.392-.04z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.065 52.271l16.087-10.054a4.544 4.544 0 013.7 0l13.594 10.899a4.505 4.505 0 004.826-.845l14.197-12.628a4.504 4.504 0 014.021-1.005l15.967 1.568"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinanceChartWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
