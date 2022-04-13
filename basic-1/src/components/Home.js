import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";


class Home extends React.Component{
  render(){
    return(
      <>
        <Sidebar></Sidebar>
        <Content></Content>
      </>
      
    );
  }
}

export default Home;
