import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldHandshakeWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 110 63" fill="none" ref={svgRef} {...props}>
      <Path
        d="M14.69 14.69h5.121a8.772 8.772 0 005.75-2.098L35.3 4.198a8.772 8.772 0 015.75-2.14h31.227a8.772 8.772 0 015.75 2.14l9.738 8.394a8.772 8.772 0 005.75 2.14h3.022"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M62.958 18.887l-11.5 10.158a7.513 7.513 0 01-10.2-.378v0a7.47 7.47 0 01.252-10.87L55.612 4.952a10.913 10.913 0 017.346-2.854h6.295"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path d="M58.76 23.084l23.085 20.987h14.69" stroke="#fff" strokeWidth={4} />
      <Path
        d="M14.69 44.07h4.743a8.814 8.814 0 016.254 2.603l9.276 9.276a9.947 9.947 0 0014.019 0l1.385-1.386 6.212 4.995a6.17 6.17 0 008.142-.462l4.533-4.532 3.61.88a6.925 6.925 0 007.513-2.895v0a8.395 8.395 0 001.469-4.785V44.07L58.76 23.085"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M14.69 10.493H2.1v37.775H14.69V10.493zM107.029 10.493H94.437v37.775h12.592V10.493z"
        stroke="#fff"
        strokeWidth={4}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldHandshakeWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
