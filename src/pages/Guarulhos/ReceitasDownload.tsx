import { Button, Center, Stack } from '@chakra-ui/react';
import { MdFileDownload } from 'react-icons/md';

import { files } from 'municipios/guarulhos/receitas/files.json';
import 'styles/download.styles.scss';

export function ReceitasDownload() {
  return (
    <Center className='container'>
      <h1>Portal de Transparência de Guarulhos - Download das receitas</h1>

      <Stack direction='row' spacing='2'>
        {files.map((file) => (
          <Button
            key={file.link}
            variant='outline'
            leftIcon={<MdFileDownload />}
            textTransform='uppercase'
          >
            <a href={file.link} target='_blank' download>
              {file.label}
            </a>
          </Button>
        ))}
      </Stack>

      {/* Não é possível forçar o download do txt, assim como o PDF. Porém,
        na visualização dos PDFs no Browser, é possível tbm baixar */}
    </Center>
  );
}
