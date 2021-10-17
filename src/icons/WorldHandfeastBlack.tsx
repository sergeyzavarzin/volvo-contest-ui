import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldHandfeastBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 76 101" fill="none" ref={svgRef} {...props}>
      <Path
        d="M46.293 73.453A24.132 24.132 0 0022.06 49.42h-3.426"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.292 32.935V15.903a8.244 8.244 0 018.292-8.193h3.079a5.313 5.313 0 015.264 5.264v17.23M52.947 44.206a7.3 7.3 0 007.2-7.25v-23.04a6.206 6.206 0 00-6.008-6.206h-4.072a6.157 6.157 0 00-5.86 6.703V29.31"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M67.197 38.2h-.298a6.753 6.753 0 01-6.753-6.704V19.38a5.908 5.908 0 015.959-5.91h1.936A5.91 5.91 0 0174 19.38v12.364a6.753 6.753 0 01-6.803 6.455v0zM26.927 31.793V7.86A5.857 5.857 0 0132.836 2H37.8c3.228 0 6.555 1.738 6.555 4.966v25.076"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M74 32.935v38.433a27.608 27.608 0 01-27.708 27.46H29.708A27.608 27.608 0 012 71.368V46.541a16.486 16.486 0 0116.535-16.387h24.828a9.93 9.93 0 019.93 9.634 9.931 9.931 0 01-9.93 9.583H18.535"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldHandfeastBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
