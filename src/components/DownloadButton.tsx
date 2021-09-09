import { Button, Center, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdFileDownload } from 'react-icons/md';
// import { api } from '../services/api';

interface Props {
  label: string;
  downloadLink: string;
}

export function DownloadButton(props: Props) {
  return (
    <Center className='container'>
      <h1>Download - Receitas - Portal de Guarulhos</h1>

      <Stack direction='row' spacing='2'>
        <Button variant='outline' leftIcon={<MdFileDownload />}>
          <a href='http://localhost:3333/files/receita.txt' download>
            PDF
          </a>
        </Button>
        <Button variant='outline' leftIcon={<MdFileDownload />}>
          CSV
        </Button>
        <Button variant='outline' leftIcon={<MdFileDownload />}>
          TXT
        </Button>
      </Stack>
    </Center>
  );
}
