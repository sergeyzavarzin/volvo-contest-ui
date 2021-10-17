import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBuildingsSafetyWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 101 100" fill="none" ref={svgRef} {...props}>
      <Path
        d="M54.738 68.274l-17.67 17.66a8 8 0 01-11.23 0l-12.05-12.07a8 8 0 010-11.23l17.66-17.64 23.29 23.28z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M27.998 87.774l-9.53 9.54a1.36 1.36 0 01-1.92 0l-14.18-14.09a1.37 1.37 0 01.05-1.92l9.58-9.53M39.935 70.78L28.954 59.797a1 1 0 00-1.415 0l-6.844 6.845a1 1 0 000 1.414l10.981 10.981a1 1 0 001.414 0l6.845-6.844a1 1 0 000-1.415zM63.398 49.284l-7.82 7.82a1.1 1.1 0 01-1.54.07l-11.16-11.16a1.1 1.1 0 01.12-1.54l7.81-7.82"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M49.998 35.864l-.32-9.66 8.32-8.34a2.43 2.43 0 013.36.38l19.8 19.81a2.43 2.43 0 01.39 3.36l-8.33 8.33-9 .32-14.22-14.2z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M63.568 20.494l17.87-17.87a2.52 2.52 0 013.56.24l12.19 12.19a2.52 2.52 0 01.21 3.54l-17.89 17.83"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuildingsSafetyWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
