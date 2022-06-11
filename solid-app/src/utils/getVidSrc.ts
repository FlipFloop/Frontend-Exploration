export const getVidSrc = (el: any, accessor: any) => {
  const mediaStream = accessor();
  if ("srcObject" in el) {
    el.srcObject = mediaStream;
  } else {
    el.src = URL.createObjectURL(mediaStream);
  }
};

