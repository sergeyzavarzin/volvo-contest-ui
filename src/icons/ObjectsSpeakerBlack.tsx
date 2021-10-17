import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsSpeakerBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 104 87" fill="none" ref={svgRef} {...props}>
      <Path
        d="M14.995 19.384H34.64v34.768H14.995a4.346 4.346 0 01-4.346-4.346V23.73a4.346 4.346 0 014.346-4.346v0z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.908 45.46H6.346A4.346 4.346 0 012 41.114v-8.692a4.346 4.346 0 014.346-4.346h6.562"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M93.308 28.076a8.692 8.692 0 110 17.384M34.638 19.384s39.113 0 58.67-17.384v69.536c-19.557-17.384-58.67-17.384-58.67-17.384M15.08 54.152l10.344 29.031a2.172 2.172 0 001.999 1.39h10.734a2.128 2.128 0 002-2.824L30.29 54.152"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsSpeakerBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
