import React, { useState, useRef } from "react";
import CropperModal from "../../components/CropperModal";
export default function Main() {
  // const [visible, setVisible] = useState(false);
  var cropper = useRef(null);

  function fn(ele) {
    cropper.current = ele;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return cropper.current.open();
    }
  }, "\u70B9\u51FB"), /*#__PURE__*/React.createElement(CropperModal, {
    fn: fn,
    width: 300,
    height: 300
  }));
}