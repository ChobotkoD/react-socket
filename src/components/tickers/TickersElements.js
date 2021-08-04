import styled from "styled-components";

export const TickersSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  align-items: center;
  justify-items: center;
  padding-top: 10%;

  .tickersButton {
    grid-column: 2/3;

    span {
      position: relative;
      bottom: 6px;
      width: 120px;
      padding: 4px 8px;
      position: relative;
      color: #fff;
      background: #ff0000;
      :after {
        content: " ";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: #ff0000;
        transform-origin: 0% 100%;
        -ms-transform: skew(-25deg, 0deg);
        -webkit-transform: skew(-25deg, 0deg);
        transform: skew(-25deg, 0deg);
      }
    }

    .tickerButton {
      margin-left: 8px;
      background: #f8e7e7;
      border: none;
      display: inline-block;
      padding: 0 5px;
      text-decoration: none;
      transform: skew(-25deg);
      cursor: pointer;
    }
  }
`;

export const TickersBlock = styled.div`
  grid-column: 2/3;
  min-width: 1020px;
  height: 120px;
  border-radius: 7px;
  background: #acb4b991; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2c3e50,
    #acb4b991
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2c3e50,
    #acb4b991
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
