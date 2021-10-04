import { Button, Link } from '@chakra-ui/react';

import 'styles/municipio-card.styles.scss';

interface Props {
  label: string;
  bandeira?: string;
}

export function MunicipioCard(props: Props) {
  const { label, bandeira } = props;

  return (
    <div className='municipio-card'>
      <h2>Portal de {label}</h2>

      <img src={bandeira} alt={`Bandeira de ${label}`} width='240' />

      <div className='buttons'>
        <Link href={'../guarulhos/receitas'}>
          <Button variant='outline'>Receitas</Button>
        </Link>

        <Link href={'../guarulhos/despesas'}>
          <Button>Despesas</Button>
        </Link>
      </div>
    </div>
  );
}
