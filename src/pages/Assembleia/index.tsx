import React from 'react';

import Header from '../../components/Header';

import { 
  Container, 
  DescEvent,
  ContainerPanel, 
  VideoPanel,
  BtnAsk,
  BtnTime,
  ContainerAlign,
  DataBut,
  ChatPanel,
  ChatPanelContent
} from './styles';

import IcoCalendar from '../../assets/ico_calendar.png';
import { Link } from 'react-router-dom';

const Assembleia: React.FC = () => {

  return (
    <Container>
      <Header />
      <ContainerPanel>

        <DescEvent>
          <h2>ASSEMBLÉIA CONDOMÍNIO PORTAL DO SUL</h2>
        </DescEvent>

        <ContainerAlign>
          <VideoPanel>
            <DataBut>
              <img src={IcoCalendar} alt="Calendário" />
              <p>DIA 15/09/2020 ÀS 19h</p>
            </DataBut>

            <div className='embed-container'>
              <iframe 
                src='https://www.youtube.com/embed/_0R3YCXCbSk' 
                title="Video"
              >
              </iframe>
            </div>
            <div className="buttons">
              <BtnTime>00:05:24</BtnTime>
              <BtnAsk>PARTICIPAR E PERGUNTAR</BtnAsk>
            </div>
          </VideoPanel>

          <ChatPanel>
            <div className="links">
              Chat | Perguntas <br />
              Votações | Participantes | Pauta
            </div>
            <ChatPanelContent>
              <h3>VOTAÇÕES</h3>
              <div>
                <p>1. Aprovação da Pauta</p>
                <span>Finalizada</span><Link to="">Ver Resultado</Link>
              </div>
              <div>
                <p>2. Aprovação da Ata</p>
                <span>Andamento</span><Link to="">Votar</Link>
              </div>
              <div>
                <p>3. Presidente da mesa</p>
                <span>Aguardando Liberação</span>
              </div>
            </ChatPanelContent>
          </ChatPanel>
        </ContainerAlign>
      </ContainerPanel>
    </Container>
  );
}

export default Assembleia;