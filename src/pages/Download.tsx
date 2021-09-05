import { Button, Center, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdFileDownload } from 'react-icons/md';
import { api } from '../services/api';

import '../styles/download.styles.scss';

interface DownloadLinks {
  pdf: string;
  csv: string;
  txt: string;
}

export function Download() {
  const [downloadLinks, setDownloadLinks] = useState<DownloadLinks>();

  function handleClick(fileType: string) {}

  useEffect(() => {
    api
      .get('/guarulhos/receitas')
      .then((response) => setDownloadLinks(response.data));
  }, [downloadLinks]);

  return (
    <Center className='container'>
      <h1>Download - Receitas - Portal de Guarulhos</h1>

      <Stack direction='row' spacing='2'>
        <Button variant='outline' leftIcon={<MdFileDownload />}>
          PDF
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
