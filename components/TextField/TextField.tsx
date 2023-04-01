import { memo, useEffect, useState } from 'react';

type Props = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
};
function TextField({ name, value, placeholder, onChange }: Props) {
  const [text, setText] = useState<string>('');

  const handleChange = (e: any) => {
    setText(e.target.value);
    onChange && onChange(e);
  };

  /**
   * useEffect
   */
  const update = () => {
    if (value !== undefined) setText(value);
  };
  useEffect(update, [value]);

  return (
    <input
      type="text"
      name={name}
      className="w-full h-14 min-h-14 leading-10 pl-4 pr-12 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
      value={text}
      onChange={handleChange}
    />
  );
}
export default memo(TextField);
