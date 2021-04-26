import React, { useState, useRef, useEffect } from "react";
import "./index.less";

export default function ScrollCom() {
  const [count, setCount] = useState(0);
  const btn = useRef(count);

  useEffect(() => {
    btn.current = count;
  });

  return (
    <>
      <div className="container">
        <div className="spn">{count}</div>
        <button
          className="btn"
          type="button"
          ref={btn}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          按钮
        </button>
        <button
          className="btn"
          type="button"
          ref={btn}
          onClick={() => {
            setTimeout(() => {
              alert(`${btn.current}`);
            }, 3000);
          }}
        >
          按钮
        </button>
        <div className="spn">ABC</div>
      </div>
    </>
  );
}
