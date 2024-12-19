import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../assets/LOGO2.webp';

// Keyframes
const spin = keyframes`
  100% {
    transform: rotateY(360deg);
  }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

// Styled Components
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  img {
    width: 40px;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 4vw, 3rem);
  height: 100%;
  width: 100%;
`;

const LoadingText = styled.div`
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.9;
  animation: ${pulse} 2s infinite;
  text-align: center;
`;

const PyramidLoader = styled.div`
  position: relative;
  width: min(200px, 60vw);
  height: min(200px, 60vw);
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) scale(${props => props.scale || 1});

  @media screen and (max-width: 480px) {
    transform: rotateX(-20deg) scale(0.8);
  }

  @media screen and (max-height: 600px) {
    transform: rotateX(-20deg) scale(0.7);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${spin} 4s linear infinite;
`;

const Side = styled.span`
  width: min(50px, 18vw);
  height: min(50px, 18vw);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const Side1 = styled(Side)`
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
`;

const Side2 = styled(Side)`
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
`;

const Side3 = styled(Side)`
  transform: rotateX(30deg);
  background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
`;

const Side4 = styled(Side)`
  transform: rotateX(-30deg);
  background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
`;

const Shadow = styled.span`
  width: min(45px, 15vw);
  height: min(45px, 15vw);
  background: #8B5AD5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-30px);
  filter: blur(12px);
`;

const Loading = ({ progress = 0 }) => {
  return (
    <LoaderContainer>
      <LogoContainer>
        <img src={Logo} alt="VSV Logo" />
      </LogoContainer>
      <ContentContainer>
        <PyramidLoader>
          <Wrapper>
            <Side1 />
            <Side2 />
            <Side3 />
            <Side4 />
            <Shadow />
          </Wrapper>
        </PyramidLoader>
        <LoadingText>Loading {progress}%...</LoadingText>
      </ContentContainer>
    </LoaderContainer>
  );
};

export default Loading;