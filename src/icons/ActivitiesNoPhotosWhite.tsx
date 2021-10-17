import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActivitiesNoPhotosWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 111 111" fill="none" ref={svgRef} {...props}>
      <Path
        d="M55.5 70.48c7.09 0 12.84-5.749 12.84-12.84S62.59 44.8 55.5 44.8c-7.092 0-12.84 5.749-12.84 12.84s5.748 12.84 12.84 12.84zM27.68 44.8h8.56"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M68.34 36.24l-4.28-8.56H46.94l-4.28 8.56h-21.4a2.183 2.183 0 00-2.14 2.14V76.9a2.183 2.183 0 002.14 2.14h68.48a2.182 2.182 0 002.14-2.14V38.38a2.183 2.183 0 00-2.14-2.14h-21.4z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M55.5 109c29.547 0 53.5-23.953 53.5-53.5S85.047 2 55.5 2 2 25.953 2 55.5 25.953 109 55.5 109z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M16.98 16.98l77.04 77.04" stroke="#fff" strokeWidth={4} strokeLinejoin="round" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActivitiesNoPhotosWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
