import { Button } from '@chakra-ui/react';
import 'styles/home.styles.scss';
import home from 'assets/home.jpg';

export function Home() {
  const handleClick = () => {};

  return (
    <div className='container'>
      <div className='content'>
        <div className='about'>
          <h1>ViWa - Cool Call</h1>
          <div className='description'>
            <p>
              Um Concentrador de Portais de transparência de{' '}
              <b>Código Aberto.</b>
            </p>
            <p>
              A estrutura da plataforma te permite adicionar rapidamente
              informações sobre o portal de transparência de seu município.
            </p>
          </div>
          <Button onClick={handleClick}>Explorar os portais</Button>
        </div>
        <img
          src={home}
          alt='Ilustração de pessoas construindo juntas um projeto open source'
        />
      </div>
    </div>
  );
}
