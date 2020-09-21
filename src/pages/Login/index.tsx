import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import { 
  Container, 
  DescEvent, 
  FormAcess, 
  ContainerPanel, 
  VideoContainer, 
  ContainerAlign,
  DecoratorCenter, 
  DataBut
} from './styles';

import IcoCalendar from '../../assets/ico_calendar.png';

const Login: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <ContainerPanel>

        <DescEvent>
          <h2>ASSEMBLEIA CONDOMÍNIO PORTAL DO SUL</h2>
        </DescEvent>

        <ContainerAlign>
          <FormAcess onSubmit={(e) => history.push('/assembleia')}>
            <DataBut>
              <img src={IcoCalendar} alt="Calendário" />
              <p>DIA 15/09/2020 ÀS 19h</p>
            </DataBut>
            <label htmlFor="code">Informe o seu código de acesso:</label>
            <input type="text" name="code" id="code" placeholder="*************" />
            <Link to="/#">Não tenho o código de acesso</Link>
          </FormAcess>
          <DecoratorCenter />
          <VideoContainer>
            <div className='embed-container'>
              <iframe 
                src='https://www.youtube.com/embed/_0R3YCXCbSk' 
                title="Video"
              >
              </iframe>
            </div>
            <p>Assista no Youtube</p>
          </VideoContainer>
        </ContainerAlign>
      </ContainerPanel>
    </Container>
  );
}

export default Login;