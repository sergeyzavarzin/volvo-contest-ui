import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgActionSettingsWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 113 113" fill="none" ref={svgRef} {...props}>
      <Path
        d="M38.365 56.5a18.133 18.133 0 1136.266 0 18.133 18.133 0 01-36.266 0z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <Path
        d="M93.438 37.746A40.927 40.927 0 0196.7 46.14v0l9.118 1.554a6.064 6.064 0 015.181 6.01v7.978a6.063 6.063 0 01-5.181 6.01l-9.895 1.657a42.276 42.276 0 01-3.833 8.392v0l5.18 7.512a6.113 6.113 0 01-.673 7.875l-5.543 5.491a6.06 6.06 0 01-7.823.674l-8.185-5.854a40.924 40.924 0 01-8.6 3.263l-1.554 9.118a6.064 6.064 0 01-6.01 5.181H51.32a6.063 6.063 0 01-6.01-5.181l-1.657-9.895a42.276 42.276 0 01-8.392-3.833v0l-7.512 5.18a6.113 6.113 0 01-7.875-.673l-5.491-5.336a6.062 6.062 0 01-.674-7.823l5.854-8.185a40.927 40.927 0 01-3.264-8.393v0l-9.117-1.554A6.061 6.061 0 012 59.297V51.32a6.061 6.061 0 015.18-6.01l9.896-1.657a42.276 42.276 0 013.833-8.392v0l-5.18-7.512a6.113 6.113 0 01.673-7.875l5.336-5.491a6.062 6.062 0 017.823-.674l8.185 5.854a40.927 40.927 0 018.393-3.264l1.554-9.117A6.061 6.061 0 0153.703 2h7.978a6.061 6.061 0 016.01 5.18l1.657 9.896a42.276 42.276 0 018.392 3.833v0l7.512-5.18a6.113 6.113 0 017.875.673l5.491 5.543a6.06 6.06 0 01.674 7.823l-5.854 7.978z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgActionSettingsWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
