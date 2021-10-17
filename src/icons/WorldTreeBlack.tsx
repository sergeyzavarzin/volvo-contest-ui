import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldTreeBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 85 104" fill="none" ref={svgRef} {...props}>
      <Path
        d="M40.839 101.573v-76.38M10.75 101.573h60.178M40.839 67.874l23.145-14.906M40.839 52.968l-18.517-9.259M40.839 39.08l9.258-6.943M82.5 46.44c0 16.525-11.573 29.904-25.784 29.904a21.338 21.338 0 01-6.48-.973 20.878 20.878 0 01-11.064 3.056 19.212 19.212 0 01-16.48-8.333C11.073 68.984 2 57.596 2 43.338c0-14.258 9.258-25.645 20.692-26.756.556-8.101 8.61-14.536 18.517-14.536a17.452 17.452 0 0118.516 14.721C72.547 18.48 82.5 31.117 82.5 46.44z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldTreeBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
