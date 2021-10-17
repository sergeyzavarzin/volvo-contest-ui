import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPuzzleBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 110 84" fill="none" ref={svgRef} {...props}>
      <Path
        d="M93.372 29.44a15.9 15.9 0 00-6.99 1.599 111.7 111.7 0 014.706-24.442 110.882 110.882 0 00-21.564-4.569 6.168 6.168 0 00-6.305 8.452l2.741 7.538a10.508 10.508 0 01-11.421 9.137 10.508 10.508 0 01-11.422-9.137l2.65-7.31a6.167 6.167 0 00-6.487-8.223 126.002 126.002 0 00-21.29 4.112 114.902 114.902 0 014.569 24.396 15.26 15.26 0 00-6.853-1.553A12.7 12.7 0 002 40.86a12.7 12.7 0 0013.706 11.422 15.213 15.213 0 007.127-1.69A110.969 110.969 0 0117.99 77.41a110.872 110.872 0 0021.564 4.569 6.166 6.166 0 006.305-8.27l-2.742-7.538a10.508 10.508 0 0111.422-9.137 10.508 10.508 0 0111.421 9.137l-2.65 7.31a6.167 6.167 0 006.488 8.223 126.003 126.003 0 0021.29-4.294 116.445 116.445 0 01-4.569-26.772 15.486 15.486 0 007.036 1.645A12.7 12.7 0 00107.26 40.86a12.717 12.717 0 00-4.575-8.592 12.71 12.71 0 00-9.314-2.83z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPuzzleBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
