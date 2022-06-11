import { onMount, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";
import io from "socket.io-client";

const useVideoStream = () => {
  const [store, setStore] = createStore({
    error: null,
    socket: null,
    peer: null,
    currentStream: null,
    currentUser: null,

    remoteStream: null,
    remoteUser: null,
    remoteMuted: false,
    remoteWebCam: true,

    incommingCall: false,
    incommingPayload: null,

    muted: false,
    webCam: true,
  });

  onMount(async () => {
    await requestMediaAccess();
  });

  onMount(() => {
    const socket = io("http://localhost:4000");
    setStore("socket", socket as any);
  });

  onCleanup(() => {
    store.socket?.disconnect();
  });

  const requestMediaAccess = async () => {
    console.log("Requesting permission...");
    console.info("Requesting permission...");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: 600,
          height: 400,
        },
      });

      setStore("currentStream", stream as any);

      console.info("Permission granted!");
    } catch (err: any) {
      console.error("media access permission error:-", err);
    }
  };

  return {
    store,
  };
};

export default useVideoStream;
