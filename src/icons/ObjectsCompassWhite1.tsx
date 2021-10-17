import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsCompassWhite1(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 100 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M50 98c26.51 0 48-21.49 48-48S76.51 2 50 2 2 23.49 2 50s21.49 48 48 48z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M72.124 27.88l-29.51 14.733L57.39 57.39l14.734-29.51z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.879 72.122l29.51-14.734-14.776-14.776-14.734 29.51z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M89.652 50H98M50 10.348V2M10.348 50H2M50 89.652V98"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsCompassWhite1);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
