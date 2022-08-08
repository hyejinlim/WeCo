import React from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';

interface Props {
  options: OptionsOrGroups<any, GroupBase<any>>;
  isMulti: boolean;
  placeHolder: string;
  onChange: (e: any) => void;
}

const SelectForm = ({ options, isMulti, placeHolder, onChange }: Props) => {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: 56,
    }),
  };
  return options[0].type !== 'CM' ? (
    <Select
      options={options}
      isMulti={isMulti}
      placeholder={placeHolder}
      onChange={onChange}
      styles={customStyles}
      isOptionDisabled={(options) => options.disabled}
    />
  ) : (
    <Select
      options={options}
      isMulti={isMulti}
      placeholder={placeHolder}
      onChange={onChange}
      styles={customStyles}
      defaultValue={{ value: options[0].value, label: options[0].label }}
      isOptionDisabled={(options) => options.disabled}
    />
  );
};

export default SelectForm;
