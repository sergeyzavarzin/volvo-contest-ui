import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductsVBusBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 97 101" fill="none" ref={svgRef} {...props}>
      <Path
        d="M10.656 31.83l-8.08-1.89c-.31 0-.56-.12-.57-.58-.18-8.4 3.81-17.82 3.81-17.82a1 1 0 01.87-.58l8.77-1.35M85.706 31.81l8-1.89c.31 0 .55-.12.56-.58.19-8.4-3.8-17.82-3.8-17.82a1.071 1.071 0 00-.88-.58l-8.65-1.34"
        stroke="#000"
        strokeWidth={4}
      />
      <Path d="M23.586 88.94v7.79a1 1 0 01-1 1h-6.86a1 1 0 01-1.05-1v-8.79" fill="#000" />
      <Path
        d="M23.586 88.94v7.79a1 1 0 01-1 1h-6.86a1 1 0 01-1.05-1v-8.79"
        stroke="#000"
        strokeWidth={4.91}
      />
      <Path d="M72.696 88.94v7.79a1 1 0 001 1h6.82a1 1 0 001-1v-8.79" fill="#000" />
      <Path
        d="M72.696 88.94v7.79a1 1 0 001 1h6.82a1 1 0 001-1v-8.79"
        stroke="#000"
        strokeWidth={4.91}
      />
      <Path
        d="M48.196 2c14.69 0 25.32 1.14 26.49 1.24a7.14 7.14 0 016.05 5.62c.79 3.22 5.06 13.52 5.54 32 .29 11.63 0 38.59-.41 45.05-.08 1.29-.44 2-1.92 2.12-1.64.18-15.24 1.17-35.75 1.17-20.51 0-34.11-1-35.75-1.17-1.64-.17-1.84-.83-1.92-2.12-.41-6.46-.71-33.42-.41-45 .48-18.48 4.74-28.78 5.54-32a7.13 7.13 0 016-5.62c1.17-.1 11.79-1.24 26.49-1.24"
        stroke="#000"
        strokeWidth={4}
      />
      <Path
        d="M10.216 74.85c0 1.26 3.05 2.52 4.14 2.87 1.09.35 3.46 1 3.46 1l7.18 1.87-2.84-8.58a6.32 6.32 0 00-4.34-4.07l-3.51-1.14c-1.27-.42-4.29-1.9-4.38-3.45"
        fill="#000"
      />
      <Path
        d="M10.216 74.85c0 1.26 3.05 2.52 4.14 2.87 1.09.35 3.46 1 3.46 1l7.18 1.87-2.84-8.58a6.32 6.32 0 00-4.34-4.07l-3.51-1.14c-1.27-.42-4.29-1.9-4.38-3.45"
        stroke="#000"
        strokeWidth={0.97}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M86.176 74.85c0 1.26-3.05 2.52-4.14 2.87-1.09.35-3.47 1-3.47 1l-7.18 1.87 2.78-8.58a6.32 6.32 0 014.34-4.07l3.47-1.13c1.27-.42 4.29-1.9 4.38-3.45"
        fill="#000"
      />
      <Path
        d="M86.176 74.85c0 1.26-3.05 2.52-4.14 2.87-1.09.35-3.47 1-3.47 1l-7.18 1.87 2.78-8.58a6.32 6.32 0 014.34-4.07l3.47-1.13c1.27-.42 4.29-1.9 4.38-3.45"
        stroke="#000"
        strokeWidth={0.97}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.105 56.25c4.29 4 20.57 6.36 37.09 6.36 16.52 0 32.8-2.4 37.09-6.36"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductsVBusBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
