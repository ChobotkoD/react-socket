import {render, screen, fireEvent} from '@testing-library/react'
import {Ticker} from '../index'

describe('Ticker initial value show/hide options', ()=>{
    beforeEach(()=>{
        render(<Ticker  
            ticker='GOOGLE'
            exchange='NASDAQ'
            price={100}
            change={101}
            change_percent={102}
            dividend={103}
            yieldNum={104}
            last_trade_time='2021-08-05T12:17:35.000Z'/>)
    })

    it('By default on the screen', ()=>{
        const ticker = screen.getByText(/google/i)
        const exchange = screen.getByText(/NASDAQ/i)
        const price = screen.getByText(/100/i)
        const change = screen.getByText(/101/i)
        const change_percent = screen.getByText(/102/i)
        const dividend = screen.getByText(/103/i)
        const yieldNum = screen.getByText(/104/i)
        const last_trade_time = screen.getByText(/NASDAQ/i)
        
        expect(ticker).toBeInTheDocument();
        expect(exchange).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(change).toBeInTheDocument();
        expect(change_percent).toBeInTheDocument();
        expect(dividend).toBeInTheDocument();
        expect(yieldNum).toBeInTheDocument();
        expect(last_trade_time).toBeInTheDocument();
    })
    
    it('Ticker will hide by click', ()=> {
        const btn = screen.getByTitle(/switch-btn/i)
        fireEvent.click(btn)
            
        const ticker = screen.queryByText(/google/i) 
        expect(ticker).not.toBeInTheDocument()
    })
    
    
    it('Ticker will show by click', ()=> {
        const btn = screen.getByTitle(/switch-btn/i)
        fireEvent.click(btn)
        fireEvent.click(btn)
            
        const ticker = screen.queryByText(/google/i) 
        expect(ticker).toBeInTheDocument()
    })
})

