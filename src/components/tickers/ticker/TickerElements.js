import styled from "styled-components";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

export const TickerContainer = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr 2fr;
  column-gap: 10px;
  grid-column: 2/3;
  text-align: center;
  height: 20px;

  @media (max-width: 768px) {
    column-gap: 1px;
    span {
      font-size: 0.7em;
    }
  }

  .switch-toggle input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -2;
  }

  .switch-toggle input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    width: 50px;
    border-radius: 10px;
    margin: 0;
    cursor: pointer;
  }

  .switch-toggle input[type="checkbox"] + label::before {
    position: absolute;
    content: "ON";
    font-size: 8px;
    text-align: center;
    line-height: 15px;
    top: -11px;
    left: 8px;
    width: 35px;
    height: 14px;
    border-radius: 20px;
    background-color: var(--light-green);
    transition: 0.3s ease-in-out;

    @media (max-width: 768px) {
      top: -8px;
    }
  }

  .switch-toggle input[type="checkbox"]:checked + label::before {
    left: 50%;
    content: "OFF";
    color: #fff;
    background-color: #d1dad3;
  }
`;

export const TickerPrice = styled.div``;

export const IconUp = styled(MdTrendingUp)`
  color: var(--light-green);
`;

export const IconDown = styled(MdTrendingDown)`
  color: var(--light-red);
`;
