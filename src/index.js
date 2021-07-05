import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

const Index = () =>{
    return <div className = "container">Hello webpack !</div>;
};

ReactDom.render(<Index/>,document.getElementById("index"));
