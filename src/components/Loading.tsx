import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  .spinner {
    width: 1rem;
    height: 1rem;
    clear: both;
    margin: 1.2rem auto;
  }
  .sp-wave {
    border-radius: 50%;
    position: relative;
    opacity: 1;
    position: absolute;
    z-index: 99999;
    right: 50%;
    top: 4.3rem;
  }
  .sp-wave:before,
  .sp-wave:after {
    content: "";
    border: 0.08rem #000 solid;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0rem;
  }
  .sp-wave:before {
    transform: scale(1, 1);
    opacity: 1;
    -webkit-animation: spWaveBe 0.6s infinite linear;
    animation: spWaveBe 0.6s infinite linear;
  }
  .sp-wave:after {
    transform: scale(0, 0);
    opacity: 0;
    -webkit-animation: spWaveAf 0.6s infinite linear;
    animation: spWaveAf 0.6s infinite linear;
  }
  @-webkit-keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes spWaveAf {
    from {
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="spinner sp-wave" />
    </LoadingContainer>
  );
};

export default Loading;
