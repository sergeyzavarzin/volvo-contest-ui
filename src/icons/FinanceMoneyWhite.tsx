import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFinanceMoneyWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 110 66" fill="none" ref={svgRef} {...props}>
      <Path
        d="M105.882 41.084A14.525 14.525 0 01108 48.707a14.823 14.823 0 01-29.647 0 14.526 14.526 0 012.117-7.623"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M4.235 48.96V6.099A1.864 1.864 0 016.1 4.235h85.214A1.863 1.863 0 0193.176 6.1v4.49h4.235v-4.49A6.141 6.141 0 0091.313 0H6.099A6.141 6.141 0 000 6.099v42.86a6.141 6.141 0 006.099 6.1h65.9v-4.236H6.1a1.864 1.864 0 01-1.864-1.863z"
        fill="#fff"
      />
      <Path
        d="M93.176 46.589c8.187 0 14.823-6.637 14.823-14.824 0-8.186-6.636-14.823-14.823-14.823-8.187 0-14.823 6.637-14.823 14.823 0 8.187 6.636 14.824 14.823 14.824z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M93.175 27.53V36"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.706 10.59h8.47M12.706 44.47h8.47M48.707 44.471c7.017 0 12.706-7.584 12.706-16.94 0-9.357-5.689-16.942-12.706-16.942C41.69 10.59 36 18.174 36 27.53c0 9.356 5.689 16.941 12.706 16.941z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFinanceMoneyWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
