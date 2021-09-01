import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { SelectComponent } from '../components/SelectComponent';

import './styles.scss';

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
    { id: 1, label: 'janeiro' },
    { id: 2, label: 'fevereiro' },
    { id: 3, label: 'março' },
    { id: 4, label: 'abril' },
    { id: 5, label: 'maio' },
    { id: 6, label: 'junho' },
    { id: 7, label: 'julho' },
    { id: 8, label: 'agosto' },
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
            label='Mês inicial'
            itens={meses}
            setItem={setMesInicialSelecionado}
          />

          <SelectComponent
            label='Mês final'
            itens={meses}
            setItem={setMesFinalSelecionado}
          />

          <SelectComponent
            label='Selecione a Quebra'
            itens={quebras}
            setItem={setQuebraSelecionada}
          />

          <SelectComponent
            label='Tipo Receita'
            itens={receitas}
            setItem={setReceitaSelecionada}
          />
        </div>

        <Button variant='outline'> Pesquisar </Button>
      </div>
    </div>
  );
}
