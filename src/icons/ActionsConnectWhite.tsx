import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgActionsConnectWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 99" fill="none" ref={svgRef} {...props}>
      <G clipPath="url(#ActionsConnectWhite_svg__clip0)">
        <Path
          d="M92.442 9.881L89.12 6.512a22.46 22.46 0 00-31.443 0L41.64 22.593a22.459 22.459 0 000 31.443l3.324 3.324a21.966 21.966 0 0011.05 5.974v-4.492a17.968 17.968 0 01-7.861-4.492l-3.324-3.369a17.967 17.967 0 010-25.244L60.865 9.702a17.967 17.967 0 0125.244 0l3.324 3.324a17.967 17.967 0 010 25.244L73.397 54.35a17.114 17.114 0 01-4.492 3.234v4.986a22.1 22.1 0 007.502-4.896L92.442 41.64a22.46 22.46 0 000-31.758z"
          fill="#fff"
        />
        <Path
          d="M57.495 44.783l-3.189-3.324a21.966 21.966 0 00-11.05-5.974v4.492a17.384 17.384 0 017.86 4.492l3.37 3.324a17.968 17.968 0 010 25.244L38.27 89.117a17.967 17.967 0 01-25.244 0l-3.324-3.323a17.967 17.967 0 010-25.244l16.036-16.036a17.472 17.472 0 014.492-3.145l-.674-4.716a21.38 21.38 0 00-6.917 4.492L6.513 57.675a22.459 22.459 0 000 31.443l3.369 3.324a22.459 22.459 0 0031.443 0L57.36 76.406a22.46 22.46 0 00.135-31.623z"
          fill="#fff"
        />
        <Path
          d="M43.03 52.6a20.168 20.168 0 010-28.434"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="ActionsConnectWhite_svg__clip0">
          <Path fill="#fff" d="M0 0h99v99H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsConnectWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
