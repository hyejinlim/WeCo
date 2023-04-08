import React from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';

type Props = {
  options: OptionsOrGroups<any, GroupBase<any>>;
  isMulti?: boolean;
  placeHolder: string;
  onChange: (e: any) => void;
  [key: string]: any;
};

function SelectForm({
  options,
  isMulti = false,
  placeHolder,
  onChange,
  ...args
}: Props) {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: 56,
    }),
  };
  return (
    <Select
      options={options}
      isMulti={isMulti}
      placeholder={placeHolder}
      onChange={onChange}
      styles={customStyles}
      {...args}
    />
  );
}

export default SelectForm;
