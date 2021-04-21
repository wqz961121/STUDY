import React from "react";

export default function hocCom() {
  return function HOCFactory(WarpperCom) {
    class HOC extends React.Component {
      componentDidMount() {
        console.log(1);
      }

      render() {
        return <WarpperCom {...this.props} />;
      }
    }
    return HOC;
  };
}
