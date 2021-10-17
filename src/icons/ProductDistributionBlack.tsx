import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductDistributionBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 99 86" fill="none" ref={svgRef} {...props}>
      <Path
        d="M57.95 68.71h38.735M96.685 60.102H55.8V2h40.886M38.583 83.773c5.942 0 10.76-4.818 10.76-10.76s-4.818-10.76-10.76-10.76-10.76 4.818-10.76 10.76 4.818 10.76 10.76 10.76z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.367 75.165H5.723A3.7 3.7 0 012 71.442V46.18a10.91 10.91 0 011.83-6.026l2.474-3.723 5.595-22.422a4.822 4.822 0 014.304-3.616l30.923-1.936v47.342"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductDistributionBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
