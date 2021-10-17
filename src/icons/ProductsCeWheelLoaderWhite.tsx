import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgProductsCeWheelLoaderWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg viewBox="0 0 120 62" fill="none" ref={svgRef} {...props}>
      <Path
        d="M119.06 34.05l-1.24-.78-.6-5.27c-.06-.33-.28-1.22-.28-1.22v-.1a6.881 6.881 0 00-2.94-3.43c-1.85-1.09-6.09-2.17-9.32-2.89-1.54-.34-2.6-.55-3.45-.67l-2-17.91a2 2 0 00-2-1.78c-3.42 0-6.94 0-10.3.09h-.09c-7.77.18-14.65.58-17.31.85a2 2 0 00-1.79 1.9v.52a2 2 0 00.56 1.48 2 2 0 001 .57 63.88 63.88 0 00-6.27 19.08c-.08.45-.15.92-.21 1.39l-1.4-9.57A2 2 0 0060 14.67l-2.71-.72h-.08l-.28-.32a2 2 0 00-2.8-.2l-20.9 17.84a2.001 2.001 0 00-.62 2.09l-8.54 7.28-3.14-2.17-1.9-3a2.001 2.001 0 00-1.68-.92H9.83a1.88 1.88 0 00-1.44.6 2 2 0 00-.57 1.46l.21 7.89c-.58 1.11-1.4 3-2.78 6.12-1.06 2.4-2.1 4.8-2.58 5.92l-1.6.86A2 2 0 000 59.11v.37a2 2 0 00.59 1.42 2 2 0 001.41.59h20.62a2 2 0 001.64-.86l4.22-6.06a2 2 0 00.2-1.94l-1.41-3.28c.126-.847.183-1.703.17-2.56l3.39-2.87a13.279 13.279 0 00-.12 1.68 13.88 13.88 0 0027.67 1.5h18.36A13.87 13.87 0 00104 48.74a.584.584 0 01.06-.11l.39-1.26 10.22-1.05a1.996 1.996 0 001.46-.88l3.5-5.24c.221-.328.339-.715.34-1.11v-3.35a2.002 2.002 0 00-.91-1.69zm-30.14-30L95.47 4l1.7 15.54c-2.52.2-6 .68-8.25 1V4.05zM67 25.17c2.18-12.9 7.39-20.49 7.44-20.57 2.81-.17 6.47-.34 10.47-.45V22.5c-1.27 2.48-4.16 8-5.4 9.8A3.349 3.349 0 0177 33.74h-.19c-3.24.18-6.88.37-7.6.36-1.84-.3-2.78-1.06-2.79-2.27.044-2.23.237-4.455.58-6.66zm-6.94 9.3c.22 1.49.72 4.87 3.88 5.26v3.37h-5.71a13.91 13.91 0 00-7.42-9.89c1-2.67 2.63-7.26 3.7-10.36l2.64-4.79.53.14 2.38 16.27zm-10.69-9.12l-7.91 6.76h-.16c-1.22.309-2.39.783-3.48 1.41l-.49-.57 13.36-11.4c-.2.63-.69 2.09-1.32 3.8zm-27.8 32.14h-15c1.94-4.47 4.63-10.62 5.11-11.56a2 2 0 00.32-1.19l-.17-6.26h4.37l1.53 2.4a2 2 0 00.55.57L23 44.74c.18.19.35.48.43 1.36a.496.496 0 000 .13v.18a10.06 10.06 0 01-.18 2.63 1.94 1.94 0 00.09 1.32l1.22 2.84-2.99 4.29zm23-2a9.829 9.829 0 01-6.18-17.51c.09-.05.18-.08.27-.14a9.772 9.772 0 014.09-1.92 9.516 9.516 0 011.78-.18 9.88 9.88 0 010 19.76l.04-.01zm23.35-12.38v-3.37a3.6 3.6 0 002.34-1.61c1.16 0 3.15-.13 6.67-.34a7.108 7.108 0 002.65-.59 13.88 13.88 0 00-2.73 5.94h-9l.07-.03zm22.59 12.38a9.89 9.89 0 01-9.87-9.88 10 10 0 019.89-9.87 9.88 9.88 0 010 19.76l-.02-.01zm25.48-17l-2.64 3.95-9.15.94a13.899 13.899 0 00-13.67-11.64c-2.578.014-5.1.76-7.27 2.15 1.53-2.42 4-7.2 5-9.15 3-.44 8.41-1.19 10.65-1.25.142.03.285.05.43.06 1.5.107 2.987.354 4.44.74 4.77 1.05 7.34 1.94 8.15 2.42.47.278.862.67 1.14 1.14 0 .17.16.6.18.72l.75 6.17a1.996 1.996 0 00.93 1.47l1.13.7-.07 1.58z"
        fill="#fff"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgProductsCeWheelLoaderWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
