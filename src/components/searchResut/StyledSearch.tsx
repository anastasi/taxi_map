import styled from "styled-components";

export const Container = styled.div`
  min-height: 5rem;
  .error {
    text-align: center;
    color: gray;
  }
  form{
    margin-top: 3rem;
  }
  .form-wrapper {
    margin-bottom: 10px;
    vertical-align: top;
    margin: 0 auto;
    display: block;
    width: 30rem;
    input {
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      -webkit-user-modify: read-write-plaintext-only;
      font: 80%/1.3 Calibri, Arial;
      border: 0;
      height: 34px;
      padding: 2px 5px;
      border: 1px solid #a6a6a6;
      width: 80%;
      display: inline-block;
      background: #fff;
      font-size: 1.3em;
      line-height: 1.7em;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }
    button {
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      height: 34px;
      padding: 2px 5px;
      border: 1px solid #a6a6a6;
      display: inline-block;
      background: #ffcc00;
      font-size: 1.3em;
      color: #343434;
      -webkit-box-sizing: border-box;
    }
    h4 {
      font-weight: 600;
      color: #535353;
      text-align: center;
      span {
        font-weight: 400;
        margin-left: 0.8rem;
      }
    }
    @media (max-width: 460px) {
      width: 100%;
      input{
        width: 70%;
      }
    }
  }
`;

export const List = styled.div`
  width: 25rem;
  display: block;
  margin: 0 auto;
  max-height: 15rem;
  overflow-y: scroll;
  z-index: 1000;
  position: absolute;
  background-color: #f7f7f7;
  color: #343434;
  border: 1px solid #fffbfb;
  cursor: pointer;
  @media (max-width: 460px) {
    width: 100%;
  }
  .list-item {
    padding: 0.2rem 2rem;
    border-bottom: 1px solid #f1ebeb;
    :hover {
      background-color: #ececec;
    }
  }
  span {
    padding-left: 1.5rem;
    color: gray;
    font-size: 13px;
    font-weight: bold;
  }
`;
