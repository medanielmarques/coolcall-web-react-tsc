import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { SelectComponent } from 'components/SelectComponent';

import 'styles/receitas.styles.scss';

import data from 'municipios/guarulhos/receitas/selectors.json';
import { api } from 'services/api';

export function ReceitasHome() {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [mesInicialSelecionado, setMesInicialSelecionado] = useState(0);
  const [mesFinalSelecionado, setMesFinalSelecionado] = useState(0);
  const [quebraSelecionada, setQuebraSelecionada] = useState(0);
  const [receitaSelecionada, setReceitaSelecionada] = useState(0);

  async function handleClick() {
    setIsFetchingData(true);

    await api
      .post('guarulhos/receitas', {
        mesInicialSelecionado,
        mesFinalSelecionado,
        quebraSelecionada,
        receitaSelecionada,
      })
      .then(() => {
        setIsFetchingData(false);

        window.location.href = `../receitas/download`;
      });
  }

  return (
    <div className='container'>
      <div className='main'>
        <h1>Receitas - Portal de Guarulhos</h1>
        <div className='selectItens'>
          <SelectComponent
            placeholder='Mês inicial'
            itens={data.mes_inicial}
            setItem={setMesInicialSelecionado}
          />

          <SelectComponent
            placeholder='Mês final'
            itens={data.mes_final}
            setItem={setMesFinalSelecionado}
          />

          <SelectComponent
            placeholder='Selecione a Quebra'
            itens={data.quebras}
            setItem={setQuebraSelecionada}
          />

          <SelectComponent
            placeholder='Tipo Receita'
            itens={data.receitas}
            setItem={setReceitaSelecionada}
          />
        </div>

        <Button
          variant='outline'
          color='white'
          colorScheme='whiteAlpha'
          _hover={{ bg: '#293345' }}
          w='100%'
          leftIcon={
            isFetchingData ? (
              <Loader type='Bars' color='white' width='25' height='25' />
            ) : undefined
          }
          onClick={handleClick}
        >
          {isFetchingData ? 'Pesquisando' : 'Pesquisar'}
        </Button>
      </div>
    </div>
  );
}
