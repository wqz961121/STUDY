import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React, { useEffect } from "react";
import { Button, Select, Upload } from "antd";
import { connect, useDispatch, useSelector } from "react-redux"; // import logo from "./logo.svg";
// import "./App.css";

import Link from "../../components/Link";
import changeAllColor from "../../utils/changeColor";
import { changeVarColor } from "../../utils/utils";
import styles from "./index.less";
import theme from "../../../config/theme";
import colors from "../../colors";
import ComponentTest from "react-lerna2/lib/routes/ComponentTest";

function App(props) {
  var store = useSelector(function (state) {
    return state.Global;
  }); // const { store, dispatch } = props;

  var _dispatch = useDispatch();

  console.log(store);
  useEffect(function () {
    return asyncFn();
  }, []);

  var changeName = function changeName() {
    _dispatch({
      type: "global/update",
      payload: {
        name: "qwq"
      }
    });
  };

  var changeAge = function changeAge() {
    _dispatch({
      type: "global/update",
      payload: {
        age: 24
      }
    });
  };

  var changeColor = function changeColor() {
    var primaryColor = colors["A"]["primary-color"];
    changeAllColor("A");
    changeVarColor(primaryColor);

    _dispatch({
      type: "global/update",
      payload: {
        theme: _objectSpread({}, theme, {
          "primary-color": primaryColor
        })
      }
    });
  };

  var asyncFn = function asyncFn() {
    fetch("bar/1").then(function (res) {
      console.log(res);
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles["App"]
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React"), /*#__PURE__*/React.createElement(Button, {
    onClick: changeName
  }, "\u6539\u53D8\u540D\u5B57"), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, store.name), /*#__PURE__*/React.createElement(Button, {
    onClick: changeAge,
    style: {
      backgroundColor: store.theme["primary-color"]
    }
  }, "\u6539\u53D8\u5E74\u9F84"), /*#__PURE__*/React.createElement(Button, {
    onClick: changeColor
  }, "\u6539\u53D8\u989C\u8272"), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, store.age), /*#__PURE__*/React.createElement("button", {
    className: "aa"
  }, "1"), /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Select.Option, {
    key: "1",
    value: "1"
  }, "1"), /*#__PURE__*/React.createElement(Select.Option, {
    key: "2",
    value: "2"
  }, "2"), /*#__PURE__*/React.createElement(Select.Option, {
    key: "3",
    value: "3"
  }, "3")), /*#__PURE__*/React.createElement(Link, {
    to: "/cropper"
  }, "to"), /*#__PURE__*/React.createElement(Upload, {
    name: "file",
    onChange: function onChange(info) {
      console.log(info);
      return false;
    }
  }, /*#__PURE__*/React.createElement(Button, null, "\u70B9\u51FB\u4E0A\u4F20"))));
} // export default connect(
//   (state) => ({store: state.Global}),
//   (dispatch) => ({ dispatch })
// )(App);


export default App;