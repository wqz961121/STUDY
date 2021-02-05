import React from "react";

export default class Son2 extends React.Component {

  componentWillMount() {
    console.log("son2 ");
  }

  componentDidMount(){
    console.log('son2 didmount');
  }

  render() {
    return <div>1</div>;
  }
}