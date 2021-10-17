import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesQuoatationWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 86 111" fill="none" ref={svgRef} {...props}>
      <Path
        d="M60.56 10.18H25.13a2.719 2.719 0 00-2.73 2.72v8.18a2.73 2.73 0 002.73 2.73h35.43a2.73 2.73 0 002.73-2.73V12.9a2.72 2.72 0 00-2.73-2.72z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.58 10.18C31.58 5.12 37 2 42.31 2c5.31 0 11.78 3.12 12.8 8.18M63.808 14.36h14.628c1.476 0 2.891.527 3.934 1.464 1.044.938 1.63 2.21 1.63 3.536v83.94c0 1.326-.586 2.598-1.63 3.535-1.043.938-2.458 1.465-3.934 1.465H7.564c-1.476 0-2.891-.527-3.934-1.465C2.586 105.898 2 104.626 2 103.3V19.37c0-1.326.586-2.598 1.63-3.536 1.043-.937 2.458-1.464 3.934-1.464h14.415"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M68.29 42.89H17.4M68.29 86.5H17.4M68.29 64.69H17.4"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesQuoatationWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
