import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef, useMemo, useCallback, useReducer } from "react";
import { Button } from 'antd';
export default function HooksTest() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var lastestCount = useRef(count);

  var handleClick = function handleClick() {
    setCount(count + 1);
  }; // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`you click ${count} me`);
  //   }, 3000);
  // });


  useEffect(function () {
    lastestCount.current = count;
    setTimeout(function () {
      console.log("you click ".concat(lastestCount.current, " me"));
    }, 3000);
  });

  var handleAlertClick = function handleAlertClick() {
    setTimeout(function () {
      alert("you click on: ".concat(count));
    }, 3000);
  };

  function sayName(person) {
    setTimeout(function () {
      alert("Hello, ".concat(person.name));
    }, 3000);
  } // let someone = {name: '1'};
  // sayName(someone)
  // someone = {name: '2'};
  // sayName(someone)


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, count), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: handleClick
  }, "onClick"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleAlertClick
  }, "show alert"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }, "click"));
}