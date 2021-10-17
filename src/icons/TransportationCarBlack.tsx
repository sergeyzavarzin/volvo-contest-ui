import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgTransportationCarBlack(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 110 85" fill="none" ref={svgRef} {...props}>
      <Path
        d="M6.24 69.842h97.52v-27.56a15.09 15.09 0 00-2.12-7.716L86.673 9.126A14.416 14.416 0 0074.25 2.002h-38.5a14.416 14.416 0 00-12.72 7.166L8.36 34.566c-1.388 2.334-2.12 5-2.12 7.716v27.56zM6.24 69.842v10.6a2.077 2.077 0 002.12 2.12h10.686a2.077 2.077 0 002.035-2.12v-10.6M88.92 69.842v10.6a2.078 2.078 0 002.035 2.036h10.685a2.076 2.076 0 002.12-2.036v-10.6M99.52 16.842l8.48 2.12v4.24l-10.6 2.12 2.12-8.48zM10.48 16.842L2 18.962v4.24l10.6 2.12-2.12-8.48z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35.92 42.282h38.16v7.293a3.732 3.732 0 01-3.307 3.689l-9.159 1.017a62.699 62.699 0 01-13.228 0l-9.159-1.017a3.73 3.73 0 01-3.307-3.689v-7.293zM95.28 40.162v8.48M14.72 40.162v8.48M84.68 46.522l10.6-2.12M25.32 46.522l-10.6-2.12"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransportationCarBlack);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
