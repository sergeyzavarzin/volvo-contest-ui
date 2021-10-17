import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgNavigationStartToEndBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 106 89" fill="none" ref={svgRef} {...props}>
      <Path
        d="M58.49 9.4l4.52-3.76a12.81 12.81 0 0117.85 1.41v0a12.82 12.82 0 0017.85 1.4l4.51-3.76v29.75a1.154 1.154 0 01-.4.86l-4.11 3.45a12.82 12.82 0 01-17.85-1.4v0a12.809 12.809 0 00-13-4"
        stroke="#000"
        strokeWidth={3.83}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.66 25.54a5.88 5.88 0 100-11.76 5.88 5.88 0 000 11.76z"
        stroke="#000"
        strokeWidth={3.83}
        strokeMiterlimit={10}
      />
      <Path
        d="M49.08 58.37c-.81.24-1.6.5-2.36.77l-20.87 7.37a25.23 25.23 0 01-8.55 1.41C8.85 67.92 2 64.23 2 59.68c0-2.31 1.76-4.39 4.59-5.89M65.56 84.4c16.9 0 30.6-6.33 30.6-14.13 0-7.43-12.45-13.53-28.25-14.08"
        stroke="#000"
        strokeWidth={3.83}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M58.5 2v84.75"
        stroke="#000"
        strokeWidth={3.83}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M37.31 19.66c0 6.29-7.35 18.67-12.56 26.66a6.08 6.08 0 01-10.19 0C9.34 38.32 2 25.95 2 19.66a17.66 17.66 0 0135.31 0v0z"
        stroke="#000"
        strokeWidth={3.83}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigationStartToEndBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
