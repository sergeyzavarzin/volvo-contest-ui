import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeopleCroudWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 118 73" fill="none" ref={svgRef} {...props}>
      <Path
        d="M115.257 48.77c0-7.89 1.42-16.36-17.24-16.36-8.19 0-12.5 1.66-14.76 4.18"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M98.017 31.51c5.434 0 9.84-4.405 9.84-9.84 0-5.434-4.406-9.84-9.84-9.84-5.435 0-9.84 4.406-9.84 9.84 0 5.435 4.405 9.84 9.84 9.84z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M34.017 36.56c-2.26-2.51-6.58-4.15-14.79-4.15-18.66 0-17.2 8.61-17.2 16.4"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.227 31.51c5.434 0 9.84-4.405 9.84-9.84 0-5.434-4.406-9.84-9.84-9.84-5.435 0-9.84 4.406-9.84 9.84 0 5.435 4.405 9.84 9.84 9.84z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M90.638 70.92c0-14.21 2.65-29.54-32-29.54s-32 15.54-32 29.54"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M58.637 38.92c10.195 0 18.46-8.265 18.46-18.46S68.832 2 58.637 2s-18.46 8.265-18.46 18.46 8.265 18.46 18.46 18.46z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeopleCroudWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
