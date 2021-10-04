import { Select } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';

interface Item {
  id: string;
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
        backgroundColor='#4d5c77'
        color='#fff'
        w='100%'
      >
        {itens.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </Select>
    </div>
  );
}
