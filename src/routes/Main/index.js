import React, { useState, useRef } from "react";

import CropperModal from "components/CropperModal";

export default function Main() {
  // const [visible, setVisible] = useState(false);
  const cropper = useRef(null);

  function fn(ele) {
    cropper.current = ele;
  }

  return (
    <>
      <button onClick={() => cropper.current.open()}>点击</button>
      <CropperModal fn={fn} width={300} height={300} />
    </>
  );
}
