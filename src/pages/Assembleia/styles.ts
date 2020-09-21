import styled from 'styled-components';

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
  margin: 8% 0 0 10%;

  h2 {
    font-weight: 600;
    font-size: 43px;
    line-height: 54px;

    @media(max-width: 1000px) {
      font-size: 32px;
      line-height: 36px;
    }
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
  margin: 20px 10% 0 10%;

  @media(max-width: 1000px) {
    flex-direction: column;
  }
`;

export const VideoPanel = styled.div`
  width: 60%;

  @media(max-width: 1000px) {
    width: 100%;
  }

 .embed-container{
  margin: 25px 0;
  border: none;
  width: 100%;
  height: 28vw;

  @media(max-width: 1000px) {
    height: 100%;
  }

   iframe {
    border: none;
    width: 100%;
    height: 100%;
   }
 }

 .buttons{
   display: flex;
   align-items: center;
   justify-content: space-between;
 }

`;

export const BtnTime = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  padding: 10px 20px;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  height: 40px;
  background: #E7E4E4;
  border-radius: 20px;
`;

export const BtnAsk = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: fit-content;
  padding: 10px 40px;
  text-align: center;
  background: #30B5F2;
  border-radius: 20px;

  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
  color: #FFFFFF;

  @media(max-width: 1000px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const DataBut = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 12px 30px;
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

export const ChatPanel = styled.div`
  width: 35%;

  @media(max-width: 1000px) {
    width: 100%;
    margin-top: 30px;
  }

  .links {
    text-align: center;
    padding: 6px 30px;
    font-size: 18px;
    line-height: 23px;
  }

`;

export const ChatPanelContent = styled.div`
  width: 100%;
  height: 28vw;
  padding: 5%;
  margin: 25px 0;

  @media(max-width: 1000px) {
    height: 100%;
  }

  border: solid 3px #B3B0B0;
  border-left: solid 6px #B3B0B0;
  border-right: solid 30px #B3B0B0;
  border-radius: 5px;

  h3 {
    font-size: 24px;
    margin-bottom: 5%;
    font-weight: bold;
  }

  div {
    margin-bottom: 6%;
    
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }

    span {
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
    }

    a {
      background: #1BD5A4;
      border-radius: 20px;
      text-decoration: none;
      padding: 6px 30px;
      margin-left: 20px;
      margin-top: 4px;

      font-size: 14px;
      line-height: 18px;
      color: #FFFFFF;
    }

    a:hover {
      background: #1EE2AF;
    }
  }
`;