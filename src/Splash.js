import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeOut } from 'react-animations';

const fader = keyframes`${fadeOut}`;

const SplashView = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  background-color: #cddc39;
  animation: ${fader} 3s ease-in-out;
`;

const Img = styled.img`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #2c3e50;
  font-size: 30px;
  font-weight: 900;
`;

const Splash = () => (
  <SplashView>
    <Img src="./loading.png" alt="loading" />
  </SplashView>
);

export default Splash;
