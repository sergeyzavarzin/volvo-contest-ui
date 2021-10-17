import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPeopleWomanWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 50 108" fill="none" ref={svgRef} {...props}>
      <Path
        d="M47.774 47.76v16.182a4.618 4.618 0 01-4.617 4.618h-5.783l8.32 24.96h-12.48v4.16a8.32 8.32 0 01-8.32 8.32v0a8.321 8.321 0 01-8.32-8.32v-4.16H4.094l8.32-24.96H6.59a4.576 4.576 0 01-4.576-4.618V47.76c0-9.443-1.373-20.8 22.88-20.8s22.88 11.232 22.88 20.8z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.852 26.96c6.893 0 12.48-5.588 12.48-12.48C37.332 7.587 31.745 2 24.852 2c-6.892 0-12.48 5.587-12.48 12.48 0 6.892 5.588 12.48 12.48 12.48z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPeopleWomanWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
