import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef } from "react";
import Cropper from "react-cropper";
import { Upload, Button, Modal } from "antd";
import useState from "../../routes/Hooks/useState";
import "cropperjs/dist/cropper.css"; // import close from '@/assets/images/close.png';

var Dragger = Upload.Dragger;
export default function CropperModal(props) {
  var _useState = useState({
    visible: false,
    fileList: [],
    uploadImgPreviewUrl: "",
    imgFormData: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var cropper = useRef();
  var _props$fn = props.fn,
      fn = _props$fn === void 0 ? function (e) {
    return e;
  } : _props$fn,
      _props$width = props.width,
      width = _props$width === void 0 ? 1 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 1 : _props$height;
  useEffect(function () {
    fn({
      open: function open() {
        return setState({
          visible: !state.visible
        });
      }
    });
  }, []);

  function handleBeforeUpload(file) {
    setState({
      fileList: [].concat(_toConsumableArray(state.fileList), [file]),
      file: file,
      imgFormData: file
    });
    return false;
  }

  ;

  function handleImgChange(info) {
    var reader = new FileReader();
    reader.readAsDataURL(info.file);

    reader.onload = function () {
      setState({
        uploadImgPreviewUrl: reader.result,
        uploadImgName: info.file.name
      });
    };
  }

  function handleAvatarCrop() {
    var imgCanvas = cropper.current.getCroppedCanvas({
      width: 256,
      height: 256,
      imageSmoothingQuality: "high"
    });
    imgCanvas.toBlob(function (blob) {
      setState({
        imgFormData: blob
      });
    });
  } // console.log(state.uploadImgPreviewUrl);


  return /*#__PURE__*/React.createElement(Modal, {
    destroyOnClose: true,
    width: 700,
    visible: state.visible,
    wrapClassName: "avatar-uploader-Modal",
    title: "\u88C1\u526A",
    onCancel: function onCancel() {
      return setState({
        visible: false
      });
    } // onOk={onOk}

  }, state.fileList.length === 0 ? /*#__PURE__*/React.createElement(Dragger, {
    name: "file",
    accept: "image/*",
    beforeUpload: function beforeUpload(file) {
      return handleBeforeUpload(file);
    },
    onChange: function onChange(info) {
      return handleImgChange(info);
    },
    fileList: state.fileList
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Cropper, {
    ref: cropper,
    aspectRatio: width / height,
    preview: ".img-preview",
    src: state.uploadImgPreviewUrl,
    style: {
      height: 225,
      width: 420
    },
    crop: handleAvatarCrop,
    guides: false
  }), /*#__PURE__*/React.createElement("p", null, "\u9884\u89C8"), /*#__PURE__*/React.createElement("div", {
    className: "img-preview",
    style: {
      width: 80,
      height: 80
    }
  }), /*#__PURE__*/React.createElement(Upload, {
    name: "file",
    accept: "image/*",
    beforeUpload: function beforeUpload(file) {
      return handleBeforeUpload(file);
    },
    onChange: function onChange(info) {
      return handleImgChange(info);
    },
    showUploadList: false
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u91CD\u65B0\u4E0A\u4F20")))));
}