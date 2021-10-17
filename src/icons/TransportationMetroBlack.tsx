import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTransportationMetroBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 85 105" fill="none" ref={svgRef} {...props}>
      <Path
        d="M69.026 86.861H15.974A13.88 13.88 0 012.092 71.387L8.679 9.493a7.162 7.162 0 017.295-6.632h53.052a7.162 7.162 0 017.295 6.632l6.587 61.894a13.882 13.882 0 01-13.882 15.474zM31.447 11.703h22.106"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M65.93 47.072H19.068a2.828 2.828 0 01-2.829-3.095l1.724-20.823a2.873 2.873 0 012.83-2.608h43.415a2.874 2.874 0 012.829 2.608l1.724 20.823a2.83 2.83 0 01-2.83 3.095zM19.29 73.599a5.526 5.526 0 100-11.053 5.526 5.526 0 000 11.053zM65.71 73.599a5.526 5.526 0 100-11.053 5.526 5.526 0 000 11.053zM13.763 95.704h57.474M15.93 86.862l-4.377 15.474M69.115 86.862l4.332 15.474"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransportationMetroBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
