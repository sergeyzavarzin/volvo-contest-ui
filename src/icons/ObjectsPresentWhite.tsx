import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgObjectsPresentWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 90" fill="none" ref={svgRef} {...props}>
      <Path
        d="M6.524 19.92h85.952A4.524 4.524 0 0197 24.445v13.572H2V24.445a4.524 4.524 0 014.524-4.524v0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.524 38.016h85.952v45.238a4.524 4.524 0 01-4.524 4.524H10.867a4.524 4.524 0 01-4.524-4.524V38.016h.18zM49.5 87.778V19.92M49.502 19.92s-17.145.271-21.67-2.805A7.508 7.508 0 0126.43 4.991a12.621 12.621 0 0115.11-.904c4.524 2.85 7.962 15.833 7.962 15.833z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M49.5 19.918s17.1.272 21.67-2.804A7.51 7.51 0 0072.525 4.99a12.576 12.576 0 00-15.064-.905c-4.57 2.85-7.962 15.833-7.962 15.833z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgObjectsPresentWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
