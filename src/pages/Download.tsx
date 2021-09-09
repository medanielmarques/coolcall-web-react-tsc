import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Center, Stack } from '@chakra-ui/react';
import { MdFileDownload } from 'react-icons/md';
// import { api } from '../services/api';

import '../styles/download.styles.scss';

interface MatchParams {
  id: string;
  municipio: string;
}

interface DownloadLinks {
  fileType: string;
  link: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export function Download({ match }: Props) {
  const { id, municipio } = match.params;

  const [downloadLinks, setDownloadLinks] = useState<DownloadLinks[]>([]);

  useEffect(() => {
    // api.get('/guarulhos/receitas');
    // .then((response) => setDownloadLinks(response.data));
  }, [downloadLinks]);

  return (
    <Center className='container'>
      <h1>Download - Receitas - Portal de {municipio}</h1>

      <Stack direction='row' spacing='2'>
        <Button
          variant='outline'
          leftIcon={<MdFileDownload />}
          textTransform='uppercase'
        >
          <a href='http://localhost:3333/files/receita.txt' download>
            pdf
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
