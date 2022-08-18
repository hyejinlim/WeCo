import React from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';

interface Props {
  options: OptionsOrGroups<any, GroupBase<any>>;
  isMulti: boolean;
  placeHolder: string;
  onChange: (e: any) => void;
  useId: () => string;
}
// TODO: key값 에러 처리
const SelectForm = ({
  options,
  isMulti,
  placeHolder,
  onChange,
  useId,
}: Props) => {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: 56,
    }),
  };
  return options[0].type !== 'contact_type' ? (
    <Select
      instanceId={useId()}
      options={options}
      isMulti={isMulti}
      placeholder={placeHolder}
      onChange={onChange}
      styles={customStyles}
      isOptionDisabled={(options) => options.disabled}
    />
  ) : (
    <Select
      instanceId={useId()}
      options={options}
      isMulti={isMulti}
      placeholder={placeHolder}
      onChange={onChange}
      styles={customStyles}
      defaultValue={{ value: options[0].value, label: options[0].label }}
      // isOptionDisabled={(options) => options.disabled}
    />
  );
};

export default SelectForm;
