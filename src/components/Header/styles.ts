import styled from 'styled-components';
import logoCabec from '../../assets/logo_cabec.png';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #232428;
  border-radius: 0 0 40px 40px;
  height: 126px;
  border-bottom: 12px solid #30B5F2;
  display: flex;
  align-items: center;

  header {
    margin-left: 10%;

    @media(max-width: 1000px) {
      margin: 0 auto;
    }
  }

  h1 {
    padding: 59px 0 0 0;
    overflow: hidden;
    background: url(${logoCabec}) no-repeat;
    height: 0 !important;
    width: 323px;
  }
`;