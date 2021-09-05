import { background, Select } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';

interface Item {
  id: number;
  label: string;
}

interface Props {
  itens: Item[];
  placeholder: string;
  setItem: React.Dispatch<React.SetStateAction<number>>;
}

export function SelectComponent(props: Props) {
  const { itens, placeholder, setItem } = props;

  const handleChange = (event: any) => {
    setItem(event.target.value);
  };

  return (
    <div>
      <Select
        onChange={handleChange}
        placeholder={placeholder}
        icon={<MdArrowDropDown />}
        backgroundColor='#1a202c'
        w='100%'
      >
        {itens.map((item) => (
          <option value={item.id}>{item.label}</option>
        ))}
      </Select>
    </div>
  );
}
