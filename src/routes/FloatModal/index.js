import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";
import styles from "./index.less";

export default function FloatModal() {
  const [visible, setVisible] = useState(false);
  const inp = useRef();
  const [str, setStr] = useState("一共五个字");
  const handleOpen = () => {
    setVisible(!visible);
  };

  useEffect(() => inp.current.focus(), []);

  useEffect(() => {
    console.log(1);
  }, [visible]);
  return (
    <div className={styles["content"]}>
      <Button onClick={() => handleOpen()}>打开弹框</Button>
      <input ref={(e) => (inp.current = e)} />
      <div class="parent">
        <div class="floa">浮动元素</div>
      </div>
      <div className={`${visible ? "float" : "common"}`} />
      <div
        className="modal"
        style={{ display: `${visible ? "block" : "none"}` }}
      >
        <div className="close" onClick={() => setVisible(false)} />
        <span>我是弹框</span>
        <span>{str?.length}</span>
      </div>
    </div>
  );
}
