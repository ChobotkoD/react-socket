export interface ITickers {
    ticker:         string;
    exchange:        string;
    price:           number;
    change:          number;
    change_percent:  number;
    dividend:        number;
    yieldNum:        number;
    last_trade_time: string;
}