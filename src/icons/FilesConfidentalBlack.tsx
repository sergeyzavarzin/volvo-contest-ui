import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFilesConfidentalBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 78 98" fill="none" ref={svgRef} {...props}>
      <Path
        d="M74.45 24.888L53.754 3.718c-.499-.538-1.1-.967-1.765-1.262a5.277 5.277 0 00-2.108-.451H6.357a4.076 4.076 0 00-1.698.28c-.54.214-1.032.54-1.442.959-.41.419-.73.92-.938 1.473a4.331 4.331 0 00-.274 1.736v84.504a4.331 4.331 0 00.274 1.735c.209.553.529 1.055.938 1.473.41.42.901.746 1.442.96.54.213 1.12.308 1.698.28h65.286a4.074 4.074 0 001.698-.28 4.149 4.149 0 001.442-.96c.41-.418.729-.92.938-1.473a4.333 4.333 0 00.274-1.735V28.69a5.125 5.125 0 00-.374-2.07 5.03 5.03 0 00-1.171-1.733z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M49.837 2.005v22.238c0 1.18.458 2.31 1.275 3.145a4.305 4.305 0 003.077 1.302h21.762"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M49.837 55.376H28.076v-5.56c0-6.671 3.982-12.23 8.9-12.23h3.96c4.919 0 8.901 5.559 8.901 12.23v5.56zM38.956 68.72c2.404 0 4.353-1.494 4.353-3.336 0-1.843-1.949-3.336-4.352-3.336-2.404 0-4.353 1.493-4.353 3.336 0 1.842 1.949 3.335 4.352 3.335z"
        stroke="#000"
        strokeWidth={4}
      />
      <Path d="M38.956 68.874v6.227" stroke="#000" strokeWidth={4} strokeLinecap="round" />
      <Path
        d="M48.14 82.063H29.773a5.985 5.985 0 01-4.278-1.81 6.252 6.252 0 01-1.772-4.372V57.38c0-.537.209-1.051.58-1.43a1.96 1.96 0 011.4-.593H52.21c.525 0 1.029.213 1.4.592.371.38.58.894.58 1.431v18.48a6.277 6.277 0 01-.448 2.376 6.17 6.17 0 01-1.31 2.016 6.021 6.021 0 01-1.968 1.346 5.916 5.916 0 01-2.324.466v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilesConfidentalBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
