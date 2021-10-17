import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBuildingsConstructionWorkerWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 88 101" fill="none" ref={svgRef} {...props}>
      <Path
        d="M86 98.74c-.11-16.35-3-32.73-42-32.73S2.08 82.53 2 98.74"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.66 40.37a23.34 23.34 0 1046.68 0"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M38.57 24.37V5.18A3.19 3.19 0 0141.75 2h4.5a3.19 3.19 0 013.18 3.18v19.19"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M38.57 6.9C27.72 9.22 19.63 18.29 19.63 29.14a1.87 1.87 0 01-.85 1.7s-4.2 2.13-4.2 9.49h58.61c0-7.36-4.19-9.49-4.19-9.49a1.84 1.84 0 01-.85-1.7c0-10.85-8.1-19.92-18.94-22.24"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuildingsConstructionWorkerWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
