import React, { useEffect, useRef } from "react";
import "./index.less";

export default function Width() {
  useEffect(() => {
    const mdu = document.querySelector("#mo");
    window.onresize = function() {
      console.log(mdu.clientWidth);
      console.log(mdu.clientHeight);
    };
  });

  useEffect(() => {
    const mdu = document.querySelector("#mo");
    console.log(mdu.clientWidth); // width - 左右border
    console.log(mdu.clientHeight); // height - 左右border
    console.log(mdu.clientTop); // 上边框的宽度
    console.log(mdu.clientLeft); // 左边框的宽度
    console.log(mdu.offsetTop); //
  }, []);

  return (
    <>
      <div>abcd</div>
      <div className="aa" style={{ margin: "40px" }}>
        <div style={{ margin: "40px" }}>测试</div>
        <div className="module" id="mo">
          模块
        </div>
      </div>
    </>
  );
}
