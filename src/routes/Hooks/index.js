import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import { Button } from 'antd';

export default function HooksTest() {
  const [count, setCount] = useState(0);
  const lastestCount = useRef(count);
  const handleClick = () => {
    setCount(count + 1);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`you click ${count} me`);
  //   }, 3000);
  // });

  useEffect(() => {
    lastestCount.current = count;
    setTimeout(() => {
      console.log(`you click ${lastestCount.current} me`);
    }, 3000);
  });

  const handleAlertClick = () => {
    setTimeout(() => {
      alert(`you click on: ${count}`);
    }, 3000);
  };

  function sayName(person) {
    setTimeout(() => {
      alert(`Hello, ${person.name}`);
    }, 3000);
  }

  // let someone = {name: '1'};
  // sayName(someone)

  // someone = {name: '2'};
  // sayName(someone)

  return (
    <React.Fragment>
      <div>{count}</div>
      <Button type="primary" onClick={handleClick}>onClick</Button>
      <Button onClick={handleAlertClick}>show alert</Button>
      <Button onClick={() => setCount(count + 1)}>click</Button>
    </React.Fragment>
  );
}
