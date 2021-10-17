import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionsInformationWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 113 113" fill="none" ref={svgRef} {...props}>
      <Path
        d="M67.82 87.223c-7.01-.191-10.884-.287-11.623-.287-.74 0-4.633.096-11.68.287v-3.594h1.089c3.05 0 4.578-1.434 4.578-4.282V54.055c0-2.4-1.013-3.603-3.02-3.603a10.584 10.584 0 00-3.068.726v-3.823a64.99 64.99 0 007.885-2.084 75.413 75.413 0 0010.19-3.967v38.043c0 2.867 1.53 4.282 4.578 4.282h1.07v3.594zm-4.78-60.85a6.96 6.96 0 01-2.14 5.153 7.103 7.103 0 01-5.181 2.093 7.006 7.006 0 01-5.133-2.093 7.255 7.255 0 010-10.256 7.006 7.006 0 015.133-2.094 7.102 7.102 0 015.18 2.094 6.928 6.928 0 012.151 5.104h-.01z"
        fill="#fff"
      />
      <Path
        d="M56.12 110.24c29.89 0 54.12-24.23 54.12-54.12C110.24 26.23 86.01 2 56.12 2 26.23 2 2 26.23 2 56.12c0 29.89 24.23 54.12 54.12 54.12z"
        stroke="#fff"
        strokeWidth={4}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionsInformationWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
