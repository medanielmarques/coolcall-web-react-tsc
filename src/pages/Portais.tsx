import { MunicipioCard } from 'components/MunicipioCard';

import 'styles/portais.styles.scss';

import bandeira_camposdojordao from 'assets/bandeira_camposdojordao.png';
import bandeira_guarulhos from 'assets/bandeira_guarulhos.png';
import bandeira_indaiatuba from 'assets/bandeira_indaiatuba.png';
import bandeira_osasco from 'assets/bandeira_osasco.jpg';
import bandeira_sp from 'assets/bandeira_sp.png';
import bandeira_sorocaba from 'assets/bandeira_sorocaba.png';

export function Portais() {
  return (
    <div className='portais'>
      <div className='lista'>
        <MunicipioCard
          label='Campos do Jordão'
          bandeira={bandeira_camposdojordao}
        ></MunicipioCard>

        <MunicipioCard
          label='Guarulhos'
          bandeira={bandeira_guarulhos}
        ></MunicipioCard>

        <MunicipioCard
          label='Indaiatuba'
          bandeira={bandeira_indaiatuba}
        ></MunicipioCard>

        <MunicipioCard
          label='Osasco'
          bandeira={bandeira_osasco}
        ></MunicipioCard>

        <MunicipioCard label='São Paulo' bandeira={bandeira_sp}></MunicipioCard>

        <MunicipioCard
          label='Sorocaba'
          bandeira={bandeira_sorocaba}
        ></MunicipioCard>
      </div>
    </div>
  );
}
