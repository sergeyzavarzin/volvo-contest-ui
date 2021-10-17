import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBuildingsPortfolioBlack(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 105 85" fill="none" ref={svgRef} {...props}>
      <Path
        d="M95.67 16.295H8.397A6.398 6.398 0 002 22.693v53.91A6.398 6.398 0 008.398 83h87.271a6.398 6.398 0 006.398-6.397v-53.91a6.398 6.398 0 00-6.398-6.398zM39.524 2h25.009a6.552 6.552 0 016.552 6.552v7.675H32.971V8.552A6.552 6.552 0 0139.524 2v0z"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M88.13 16.227v26.394a3.871 3.871 0 01-3.872 3.871h-64.46a3.871 3.871 0 01-3.87-3.871V16.227"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M44.557 38.943h14.944"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuildingsPortfolioBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
