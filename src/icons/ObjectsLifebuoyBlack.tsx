import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsLifebuoyBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 102 103" fill="none" ref={svgRef} {...props}>
      <Path
        d="M51 89.359c21.184 0 38.357-17.173 38.357-38.358 0-21.184-17.173-38.357-38.357-38.357S12.643 29.817 12.643 51.001C12.643 72.186 29.816 89.36 51 89.36zM22.736 20.718c18.573-24.225 36.54-25.679 56.527 0M20.718 79.264c-24.225-18.573-25.679-36.338 0-56.526M79.263 81.283c-16.15 24.226-36.339 25.679-56.527 0M81.282 22.738c24.226 18.573 25.679 36.54 0 56.526"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M51 69.17c10.034 0 18.169-8.134 18.169-18.169 0-10.034-8.135-18.169-18.17-18.169-10.034 0-18.169 8.135-18.169 18.17 0 10.034 8.135 18.169 18.17 18.169zM38.161 38.16L18.175 18.174M38.161 63.84L18.175 83.826M63.842 63.84l19.986 19.986M63.842 38.16l19.986-19.986"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsLifebuoyBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
