import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { SelectComponent } from '../components/SelectComponent';

import '../styles/receitas.styles.scss';

interface Item {
  id: number;
  label: string;
}

interface fetchedData {
  allItens: [Item[]];
}

export function Receitas() {
  const [mesInicialSelecionado, setMesInicialSelecionado] = useState(0);
  const [mesFinalSelecionado, setMesFinalSelecionado] = useState(0);
  const [quebraSelecionada, setQuebraSelecionada] = useState(0);
  const [ReceitaSelecionada, setReceitaSelecionada] = useState(0);

  const meses = [
    { id: 1, label: 'Janeiro' },
    { id: 2, label: 'Fevereiro' },
    { id: 3, label: 'Março' },
    { id: 4, label: 'Abril' },
    { id: 5, label: 'Maio' },
    { id: 6, label: 'Junho' },
    { id: 7, label: 'Julho' },
    { id: 8, label: 'Agosto' },
  ];

  const quebras = [
    { id: 1, label: 'Classificação' },
    { id: 2, label: 'Fonte' },
    { id: 3, label: 'Data' },
  ];

  const receitas = [
    { id: 1, label: 'Orçamentária' },
    { id: 2, label: 'Extra-Orçamentária' },
  ];

  return (
    <div className='container'>
      <div className='main'>
        <h1>Receitas - Portal de Guarulhos</h1>
        <div className='selectItens'>
          <SelectComponent
            placeholder='Mês inicial*'
            itens={meses}
            setItem={setMesInicialSelecionado}
          />

          <SelectComponent
            placeholder='Mês final*'
            itens={meses}
            setItem={setMesFinalSelecionado}
          />

          <SelectComponent
            placeholder='Selecione a Quebra*'
            itens={quebras}
            setItem={setQuebraSelecionada}
          />

          <SelectComponent
            placeholder='Tipo Receita*'
            itens={receitas}
            setItem={setReceitaSelecionada}
          />
        </div>

        <Button
          variant='outline'
          color='white'
          colorScheme='whiteAlpha'
          _hover={{ bg: '#293345' }}
          w='100%'
        >
          Pesquisar
        </Button>
      </div>
    </div>
  );
}
