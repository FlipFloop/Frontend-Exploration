import { Component, ComponentProps } from "solid-js";

import Stream from "../components/Stream";

import useVideoStream from "../hooks/useVideoStream";

interface HomeProps extends ComponentProps<any> {
  // add props here
}

const Home: Component<HomeProps> = (props: HomeProps) => {
  const { store } = useVideoStream();

  return (
    <div>
      <h2>Home</h2>
      <Stream stream={store.currentStream} name="You" />
    </div>
  );
};

export default Home;
