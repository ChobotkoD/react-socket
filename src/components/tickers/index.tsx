import React, {useEffect} from 'react'

import {Ticker} from './ticker'
import {fetchThunk} from '../../asyncActions'
import { useSelector, useDispatch  } from "react-redux"
import {TickersSection, TickersBlock} from './TickersElements'
import { ITickers } from '../../types'



export const Tickers: React.FC<any> = ({sock, sockClick}) => {
    const state = useSelector((store:any) => store);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchThunk(sock))
      },[])

   
    return (
        <TickersSection>
            <div className='tickersButton'>               
                <span >set interval
                    <button className='tickerButton' onClick={(e)=>{sockClick(e.currentTarget.value)}} value={3000}>3 sec</button>
                    <button className='tickerButton' onClick={(e)=>{sockClick(e.currentTarget.value)}} value={2000}>2 sec</button>
                    <button className='tickerButton' onClick={(e)=>{sockClick(e.currentTarget.value)}} value={1000}>1 sec</button>
                </span>                
            </div>
           <TickersBlock>
           {state.tickerState.map((ticker: ITickers,i: number) => (          
                <Ticker key={i} {...ticker}/>
        )
           )}    
            </TickersBlock>
        </TickersSection>
    )
}


