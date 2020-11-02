import React, { useEffect, useRef } from "react";
import Cropper from "react-cropper";
import { Upload, Button, Modal } from "antd";

import useState from "@/routes/Hooks/useState";
import "cropperjs/dist/cropper.css";
// import close from '@/assets/images/close.png';

const { Dragger } = Upload;

export default function CropperModal(props) {
  const [state, setState] = useState({
    visible: false,
    fileList: [],
    uploadImgPreviewUrl: "",
    imgFormData: {},
  });
  const cropper = useRef();

  const { fn = (e) => e, width = 1, height = 1 } = props;

  useEffect(() => {
    fn({ open: () => setState({ visible: !state.visible }) });
  }, []);

  function handleBeforeUpload(file) {
    setState({
      fileList: [...state.fileList, file],
      file,
      imgFormData: file,
    });
    return false;
  };

  function handleImgChange(info) {
    const reader = new FileReader();
    reader.readAsDataURL(info.file);
    reader.onload = () => {
      setState({
        uploadImgPreviewUrl: reader.result,
        uploadImgName: info.file.name,
      });
    };
  }

  function handleAvatarCrop() {
    const imgCanvas = cropper.current.getCroppedCanvas({
      width: 256,
      height: 256,
      imageSmoothingQuality: "high",
    });
    imgCanvas.toBlob((blob) => {
      setState({ imgFormData: blob });
    });
  }
  // console.log(state.uploadImgPreviewUrl);

  return (
    <Modal
      destroyOnClose
      width={700}
      visible={state.visible}
      wrapClassName="avatar-uploader-Modal"
      title="裁剪"
      onCancel={() => setState({ visible: false })}
      // onOk={onOk}
    >
      {state.fileList.length === 0 ? (
      <Dragger
        name="file"
        accept="image/*"
        beforeUpload={(file) => handleBeforeUpload(file)}
        onChange={info => handleImgChange(info)}
        fileList={state.fileList}
      >
      </Dragger>
      ) : (
        <div style={{ display: "inline-block" }}>
          <Cropper
            ref={cropper}
            aspectRatio={width / height}
            preview=".img-preview"
            src={state.uploadImgPreviewUrl}
            style={{ height: 225, width: 420 }}
            crop={handleAvatarCrop}
            guides={false}
          />
          <p>预览</p>
          <div className="img-preview" style={{ width: 80, height: 80 }} />
          <Upload
              name="file"
              accept="image/*"
              beforeUpload={file => handleBeforeUpload(file)}
              onChange={info => handleImgChange(info)}
              showUploadList={false}
            >
              <Button style={{ marginLeft: 8 }}>
                <span>重新上传</span>
              </Button>
            </Upload>
        </div>
      )}
    </Modal>
  );
}
