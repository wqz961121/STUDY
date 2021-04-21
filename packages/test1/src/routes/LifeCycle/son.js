import React from "react";

export default class Son extends React.Component {

  componentWillMount() {
    console.log("son ");
  }

  componentDidMount(){
    console.log('son didmount');
  }

  render() {
    return <div>1</div>;
  }
}
