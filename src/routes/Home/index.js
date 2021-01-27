import React from "react";
import { Button, Select, Upload } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
// import logo from "./logo.svg";
// import "./App.css";
import Link from "components/Link";
import changeAllColor from "utils/changeColor";
import { changeVarColor } from "../../utils/utils";
import styles from "./index.less";
import theme from "../../../config/theme";
import colors from "../../colors";

function App(props) {
  const store = useSelector((state) => state.Global);
  // const { store, dispatch } = props;
  const _dispatch = useDispatch();
  console.log(store);

  const changeName = () => {
    _dispatch({
      type: "global/update",
      payload: { name: "qwq" },
    });
  };
  const changeAge = () => {
    _dispatch({
      type: "global/update",
      payload: { age: 24 },
    });
  };
  const changeColor = () => {
    const primaryColor = colors["A"]["primary-color"];
    changeAllColor("A");
    changeVarColor(primaryColor);
    _dispatch({
      type: "global/update",
      payload: { theme: { ...theme, "primary-color": primaryColor } },
    });
  };
  return (
    <div className={styles["App"]}>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={changeName}>改变名字</Button>
        <span className="text">{store.name}</span>
        <Button
          onClick={changeAge}
          style={{ backgroundColor: store.theme["primary-color"] }}
        >
          改变年龄
        </Button>
        <Button onClick={changeColor}>改变颜色</Button>
        <span className="text">{store.age}</span>
        <button className="aa">1</button>
        <Select>
          <Select.Option key="1" value="1">
            1
          </Select.Option>
          <Select.Option key="2" value="2">
            2
          </Select.Option>
          <Select.Option key="3" value="3">
            3
          </Select.Option>
        </Select>
        <Link to="/cropper">to</Link>
        <Upload
          name="file"
          onChange={(info) => {
            console.log(info);
            return false;
          }}
        >
          <Button>点击上传</Button>
        </Upload>
      </header>
    </div>
  );
}

// export default connect(
//   (state) => ({store: state.Global}),
//   (dispatch) => ({ dispatch })
// )(App);

export default App;
