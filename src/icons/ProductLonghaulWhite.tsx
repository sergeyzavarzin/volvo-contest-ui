import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductLonghaulWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 98 90" fill="none" ref={svgRef} {...props}>
      <Path
        d="M33.863 88c6.211 0 11.246-5.022 11.246-11.218 0-6.195-5.035-11.217-11.246-11.217-6.21 0-11.246 5.022-11.246 11.217C22.617 82.978 27.652 88 33.863 88zM80.722 88c6.21 0 11.246-5.022 11.246-11.218 0-6.195-5.035-11.217-11.246-11.217s-11.246 5.022-11.246 11.217C69.476 82.978 74.51 88 80.722 88z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.12 80.522H6.106a4.114 4.114 0 01-2.922-1.22A4.094 4.094 0 012 76.373v-40.72l4.592-21.425a6.018 6.018 0 012.111-3.415 6.045 6.045 0 013.794-1.334h17.618l.844-.841a9.966 9.966 0 017.028-2.898h16.495v56.087l-7.498 3.74M50.733 71.174h13.12M95.717 61.826H60.105V2h35.612"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductLonghaulWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
