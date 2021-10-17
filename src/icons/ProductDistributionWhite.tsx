import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductDistributionWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 99 86" fill="none" ref={svgRef} {...props}>
      <Path
        d="M57.95 68.71h38.735M96.685 60.102H55.8V2h40.886M38.583 83.772c5.942 0 10.76-4.817 10.76-10.76 0-5.942-4.818-10.759-10.76-10.759s-10.76 4.817-10.76 10.76c0 5.942 4.818 10.76 10.76 10.76z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.367 75.165H5.723A3.704 3.704 0 012 71.442V46.178a10.91 10.91 0 011.83-6.025l2.474-3.723 5.595-22.423a4.82 4.82 0 014.304-3.615l30.923-1.937v47.342"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductDistributionWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
