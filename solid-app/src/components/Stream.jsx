// import { Component, ComponentProps } from "solid-js";

import {getVidSrc} from "../utils/getVidSrc";

// interface StreamProps extends ComponentProps<any> {
//   stream: any;
// }

// const Stream: Component<StreamProps> = (props: StreamProps) => {
const Stream = (props) => {
  return (
    <div>
      <h2>Stream</h2>
      <video
        autoplay
        controls={false}
        playsinline
        use:getVidSrc={props.stream}
      ></video>
      <h6 class="">{props.name}</h6>
    </div>
  );
};

export default Stream;
