import React from "react";
import HocCom from "./HocCom";

@HocCom()
export default class HocLearn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(2);
  }

  render() {
    return (
      <>
        <div>1</div>
      </>
    );
  }
}
