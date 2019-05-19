import React from "react";
import styled from "styled-components";

const Marker = styled.div`
  width: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const GoogleMarker: React.FunctionComponent<{
  iconMarker: string;
  lat: number;
  lng: number;
}> = ({ iconMarker }) => (
  <Marker>
    <img src={iconMarker} alt="marker" />
  </Marker>
);
