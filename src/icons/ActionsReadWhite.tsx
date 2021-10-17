import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsReadWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 110 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M56.73 38.48c10.074 0 18.24-8.166 18.24-18.24C74.97 10.166 66.804 2 56.73 2c-10.073 0-18.24 8.166-18.24 18.24 0 10.074 8.167 18.24 18.24 18.24z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M5.65 74.97v18.24s18.25-3.65 51.07 10.95c0 0 21.89-10.95 47.43-10.95V74.97M5.65 38.49v-7.3s18.25-3.65 51.07 10.94c0 0 21.89-10.94 47.43-10.94v7.3"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M56.73 42.13v62.02M7.48 49.43h-.01A5.47 5.47 0 002 54.9v3.65a5.47 5.47 0 005.47 5.47h.01a5.47 5.47 0 005.47-5.47V54.9a5.47 5.47 0 00-5.47-5.47zM102.34 49.43h-.01a5.47 5.47 0 00-5.47 5.47v3.65a5.47 5.47 0 005.47 5.47h.01a5.47 5.47 0 005.47-5.47V54.9a5.47 5.47 0 00-5.47-5.47z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsReadWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
