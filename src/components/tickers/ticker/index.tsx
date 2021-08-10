import React, { useEffect, useState, useRef } from 'react'
import {TickerContainer, TickerPrice, IconUp, IconDown} from './TickerElements'
import { ITickers } from '../../../types'



export const Ticker = ({ticker, exchange, price, change, change_percent, dividend, yieldNum, last_trade_time}:ITickers) => {
   const [tick, setTick] = useState<boolean>(true)
    
    const usePrevious = (value: number) => {
        const ref:{current: number | undefined} = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
       }

       

 
return (
    <TickerContainer>
        <span >{tick && ticker}</span>
        <span>{tick && exchange}</span> 
        <span>{price > usePrevious(price)!
        ? <TickerPrice >{tick && <>${price}<IconUp/></>}</TickerPrice>
        : <TickerPrice >{tick && <>${price}<IconDown/></>}</TickerPrice>}</span>
        <span>{tick && change}</span>
        <span>{tick && <>{change_percent}%</>}</span>
        <span>{tick && dividend}</span>
        <span>{tick && yieldNum}</span>
        <span>{tick && last_trade_time}</span>   
        <span className ="switch-toggle">
            <input type="checkbox" id={ticker} onChange={()=>setTick(prev=> !prev)}/>
            <label aria-label='button-switch-on-off' title='switch-btn' htmlFor={ticker}></label>
        </span>
    </TickerContainer>
    )
}
