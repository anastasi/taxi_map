import styled from "styled-components";

export const Container = styled.div`
  min-height: 5rem;
  .error {
    text-align: center;
    color: gray;
  }
  form {
    margin-top: 3rem;
  }
  .form-wrapper {
    vertical-align: top;
    margin: 0 auto;
    display: block;
    width: 30rem;
    input {
      -webkit-border-radius: 0.3rem;
      -moz-border-radius: 0.3rem;
      -o-border-radius: 0.3rem;
      border-radius: 0.3rem;
      -webkit-user-modify: read-write-plaintext-only;
      height: 2.2rem;
      padding: 0.2rem 0.5rem;
      border: 0.08rem solid #a6a6a6;
      width: 80%;
      display: inline-block;
      background: #fff;
      font-size: 1.3rem;
      line-height: 1.7rem;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }
    button {
      -webkit-border-radius: 0.3rem;
      -moz-border-radius: 0.3rem;
      -o-border-radius: 0.3rem;
      border-radius: 0.3rem;
      height: 2.2rem;
      padding: 0.2rem 0.5rem;
      border: 0.08rem solid #a6a6a6;
      display: inline-block;
      background: #ffcc00;
      font-size: 1.3rem;
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
      input {
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
  border: 0.08rem solid #fffbfb;
  cursor: pointer;
  @media (max-width: 460px) {
    width: 100%;
  }
  .list-item {
    padding: 0.2rem 2rem;
    border-bottom: 0.08rem solid #f1ebeb;
    :hover {
      background-color: #ececec;
    }
  }
  span {
    padding-left: 1.5rem;
    color: gray;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
