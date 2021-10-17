import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWorldChatBubblesWhite(props: SvgProps, svgRef?: React.Ref<React.Component<SvgProps>>) {
  return (
    <Svg viewBox="0 0 99 101" fill="none" ref={svgRef} {...props}>
      <Path
        d="M86.906 85.957A21.3 21.3 0 0099 68.084c0-10.525-10.03-19.358-23.61-22l-3.632 3.632c13.126 1.486 23.115 9.164 23.115 18.368a17.749 17.749 0 01-11.104 14.86 2.105 2.105 0 00-1.156 1.94c.298 3.564 1.6 6.97 3.757 9.824a31.701 31.701 0 01-12.136-7.719 1.98 1.98 0 00-1.486-.66h-.289c-1.857.282-3.734.42-5.613.412-15.355 0-27.862-8.255-27.862-18.657a13.91 13.91 0 013.054-8.461h-4.705a16.923 16.923 0 00-2.311 8.461c0 12.383 14.364 22.785 31.989 22.785 1.734 0 3.426 0 5.118-.289a41.277 41.277 0 0020.267 9.989h.33a2.187 2.187 0 001.899-1.238 2.105 2.105 0 00-.578-2.436 22.372 22.372 0 01-7.14-10.938z"
        fill="#fff"
      />
      <Path
        d="M17.19 48.312c-.495 9.246-9.948 17.048-9.948 17.048a47.964 47.964 0 0024.766-12.59c2.363.383 4.748.603 7.14.66 20.64 0 37.15-11.516 37.15-25.715S59.788 2 39.148 2C18.512 2 2 13.516 2 27.715c0 8.38 6.191 15.933 15.19 20.597z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWorldChatBubblesWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
