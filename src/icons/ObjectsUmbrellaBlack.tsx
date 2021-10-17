import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsUmbrellaBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 108 114" fill="none" ref={svgRef} {...props}>
      <Path
        d="M53.635 58.222v42.77M53.635 100.774a11.226 11.226 0 11-22.452 0M53.635 6.888V2M53.635 63.11c0-8.91-10.588-16.215-24.696-16.215C14.831 46.895 2 53.7 2 62.608v-2.243C2 32.149 25.419 8.739 53.635 8.739c28.216 0 51.635 23.41 51.635 51.626v2.243c0-8.91-12.831-15.713-26.94-15.713-14.107 0-24.695 7.305-24.695 16.215z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsUmbrellaBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
