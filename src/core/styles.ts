import { css } from "goober/src/css";

const container = css`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "OpenSans", sans-serif;
`;

const provider = css`
  width: 50%;
  min-width: 200px;
  max-width: 350px;
  height: 150px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  box-sizing: border-box;
  text-align: center;
  &:nth-child(2n + 1) {
    border-right: 1px solid #ccc;
  }
  &:nth-child(2n):nth-last-child(1),
  &:nth-child(2n + 1):nth-last-child(1) {
    border-bottom: 0;
  }
  &:hover {
    background: #f4f4f4;
    cursor: pointer;
  }
  @mediascreenand (max-width:500px) {
    width: 100%;
    border-right: 0 !important;
    &:nth-child(2n + 1):nth-last-child(2) {
      border-bottom: 1px solid #ccc !important;
    }
  }
`;

const modalSmall = css`
  max-width: 350px !important;
  .${provider} {
    width: 100%;
    border-right: 0 !important;
  }
`;

const modal = css`
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 700px;
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  @mediascreenand (max-width:500px) {
    max-width: 350px;
  }
  &:not(.${modalSmall}).${provider}:nth-child(2n+1):nth-last-child(2) {
    border-bottom: 0;
  }
`;

const providerName = css`
  padding: 5px 10px;
  font-weight: bold;
  font-size: 20px;
`;

const providerText = css`
  padding: 5px 10px;
  color: darkgray;
`;

const logoWrapper = css`
  height: 50px;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const dark = css``;

export default {
  dark,
  container,
  provider,
  providerText,
  providerName,
  modal,
  modalSmall,
  logoWrapper,
};
