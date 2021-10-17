import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsMapBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 96 94" fill="none" ref={svgRef} {...props}>
      <Path
        d="M66.66 5.06L61.08 2v74.44l27.07 14.23V44.44"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M93.08 19.02c0 4.38-5.12 13-8.76 18.58a4.23 4.23 0 01-7.1 0c-3.64-5.57-8.76-14.2-8.76-18.58a12.31 12.31 0 1124.62 0v0z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M31.54 91.05L2 81.37V7.52l29.54 9.68v73.85zM61.08 75.85L31.54 91.21V17.37L61.08 2v73.85z"
        stroke="#000"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M2 34.6l1.67 1.81"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M10.22 43.5l16.37 17.74"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeDasharray="4.83 9.66"
      />
      <Path
        d="M29.87 64.79l1.67 1.81 2.12-1.24"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M40.97 61.1l20.11-11.73h10.54"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeDasharray="4.23 8.46"
      />
      <Path
        d="M75.85 49.37h2.46"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M80.77 23.11a4.1 4.1 0 100-8.2 4.1 4.1 0 000 8.2z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsMapBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
