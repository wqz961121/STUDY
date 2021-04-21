import React from "react";
import { Link as ReactLink } from "react-router-dom";

export default function Link(props) {
  const linkProps = { ...props, to: `${props.to}`, target: "_blank" };
  return <ReactLink {...linkProps} />;
}
