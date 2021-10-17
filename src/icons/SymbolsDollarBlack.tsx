import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSymbolsDollarBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 107 107" fill="none" ref={svgRef} {...props}>
      <Path
        d="M51.097 87.833v-8.828a26.142 26.142 0 01-16.922-9.221l3.63-4.022a22.168 22.168 0 0017.069 8.534c7.013 0 11.82-3.531 11.82-8.927 0-14.125-30.606-4.904-30.606-24.523 0-7.7 6.279-12.41 15.009-12.949v-8.73h4.905v8.779a24.524 24.524 0 0114.223 7.014l-3.433 4.365a19.225 19.225 0 00-14.714-6.67c-6.72 0-10.594 3.09-10.594 7.798 0 13.88 30.654 4.66 30.654 24.524 0 8.289-7.406 13.586-16.382 14.077v8.78h-4.659z"
        fill="#000"
      />
      <Path
        d="M53.5 105c28.443 0 51.5-23.057 51.5-51.5S81.943 2 53.5 2 2 25.057 2 53.5 25.057 105 53.5 105z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSymbolsDollarBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
