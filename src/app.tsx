import React from "react";
import io from 'socket.io-client';
import {Tickers} from "./components/tickers";



const App: React.FC = () =>{
 
  const socket = io('http://localhost:4000');
  socket.on('connect', ()=>{console.log('socket connected')})
  socket.emit("start", 3000);


  const sockClick = (inter: number) => {
    socket.emit('offinterval')
    socket.emit("start", inter)
  }

 
return (
    <>
      <Tickers sock={socket} sockClick={sockClick}/>
    </>
  );
}

export { App };
