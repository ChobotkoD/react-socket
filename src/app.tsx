import React from "react";
import Header from "./components/header";
import img from './png1.png'
import img1 from './svg1.svg'

const App: React.FC = () =>{
let a: string = 'dsdsd'
console.log(a)
  return (
    <>
    <img src={img}/>
    <img src={img1} style={{width: '100px'}}/>
      <div
        onClick={() => {
          console.log("react works");
        }}
      >
        Hello Wolrd!
      </div>

      <Header />
    </>
  );
}

export {App};
