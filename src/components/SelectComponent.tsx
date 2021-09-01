import { Select } from '@chakra-ui/react';

interface Item {
  id: number;
  label: string;
}

interface Props {
  itens: Item[];
  label: string;
  setItem: React.Dispatch<React.SetStateAction<number>>;
}

export function SelectComponent(props: Props) {
  const { itens, label, setItem } = props;

  const handleChange = (event: any) => {
    setItem(event.target.value);
  };

  return (
    <>
      <span>{label}</span>

      <Select onChange={handleChange}>
        {itens.map((item) => (
          <option value={item.id}> {item.label} </option>
        ))}
      </Select>
    </>
  );
}
