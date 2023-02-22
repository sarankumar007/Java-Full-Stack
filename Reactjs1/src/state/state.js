import logo from './logo.svg';
import './App.css';

import React from "react";

class Pcube extends React.Component{
    constructor(props){
        super(props);
        this.state={
            r:2,
            b:3,
            h:5,
            pi:3.14
        };
    }
    changeR=()=>{
        this.setState({r:5});
       
    }
    changeB=()=>{
      this.setState({b:6});
      
  }
  changeH=()=>{
    this.setState({h:10});
   
}
changeAll=()=>{
  this.changeR();
  this.changeB();
  this.changeH();
  
}
    render(){
    var side=this.props.s;
    var peri=12*side;
    return (
        <>
        <h1>R value : {this.state.r}</h1>
        <h1>B value : {this.state.b}</h1>
        <h1>H value : {this.state.h}</h1>
        <button onClick={this.changeR}>change r value</button>
        <button onClick={this.changeB}>change b value</button>
        <button onClick={this.changeH}>change h value</button>
        <button onClick={this.changeAll}>change r,b,h value</button>
        <h1>pi*r*b*h={this.state.pi*this.state.r*this.state.b*this.state.h}</h1>
        </>
    );
}
}

export default Pcube;
