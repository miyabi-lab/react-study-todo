import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/header";

const Layout = (props) => {
  return (
    <>
      <Header/>
      {props.children}
    </>
  );
}

export default Layout