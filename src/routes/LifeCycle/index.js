import React from "react";
import Son from './son';
import Son2 from './son2';


export default class Parent extends React.Component {

  componentWillMount() {
    console.log("parent ");
  }

  componentDidMount(){
    console.log('par didmount');
  }

  render() {
    return (
      <div>
        <div>父组件</div>
        <Son />
        <Son2 />
      </div>
    );
  }
}
