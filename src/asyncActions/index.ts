import { showTickers } from "../store/action-creators";

export const fetchThunk = (sock:any) => {
  return (dispatch:any) => {
    sock.on("ticker", (response: []) => {
      dispatch(showTickers(response));
    });
  };
};
