export const tickerReducer = (
    initialState = [{}],
    action: any
) => {
    switch (action.type) {
        case "showTickers":
            return initialState = action.payload
        default:
            return initialState
    }
}

