import styled from 'styled-components';

import imgCenter from '../../assets/img_center.jpg';

export const Container = styled.div`
  margin: 0 auto;

`;

export const ContainerPanel = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 10px 20px;
`;

export const DescEvent = styled.div`
  margin: 70px 0 0 90px;

  h2 {
    font-weight: 600;
    font-size: 43px;
    line-height: 54px;
  }

  p {
    color: #777;
  }

`;

export const ContainerAlign = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 80px 90px 0 90px;

  @media(max-width: 1000px) {
    flex-direction: column;
  }

`;

export const FormAcess = styled.form`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;

  label {
    margin-top: 70px;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
  }

  input {
    width: 348px;
    height: 59px;
    background: #E2E2E2;
    border-radius: 20px;
    border: none;
    margin-top: 20px;
    text-align: center;
  }

  a {
    margin-top: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
  }

`;

export const DataBut = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 22px;
  background: linear-gradient(89.81deg, #30B5F2 23.06%, #1AD6A1 96.22%);
  border-radius: 20px;

  p {
    margin-left: 15px;
    font-weight: 800;
    font-size: 22px;
    line-height: 28px;
    color: #FFFFFF;
  }

`;

export const DecoratorCenter = styled.div`
  background: url(${imgCenter}) no-repeat center center;
  flex-grow: 1;
  height: 300px;

  @media(max-width: 1280px) {
    display: none;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 1000px) {
    margin-top: 40px;
  }

  div {
    width: 470px;
    height: 247px;
    border: none;

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  p {
    margin-top: 10px;
    font-size: 22px;
    line-height: 28px;
  }
`;