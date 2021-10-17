import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeopleManWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 50 108" fill="none" ref={svgRef} {...props}>
      <Path
        d="M47.774 47.76v16.183a4.577 4.577 0 01-4.617 4.617h-5.783v29.12a8.319 8.319 0 01-8.32 8.32h-8.32a8.317 8.317 0 01-8.32-8.32V68.56H6.632a4.575 4.575 0 01-4.618-4.617V47.76c0-9.443-1.373-20.8 22.88-20.8s22.88 11.232 22.88 20.8z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.892 26.96c6.893 0 12.48-5.588 12.48-12.48C37.372 7.587 31.785 2 24.892 2 18 2 12.412 7.587 12.412 14.48c0 6.892 5.588 12.48 12.48 12.48z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeopleManWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
