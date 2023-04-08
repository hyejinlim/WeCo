import { memo, useEffect, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type Props = {
  name?: string;
  value?: string;
  placeholder?: string;
  errorText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  onChange?: (e: any) => void;
};
function TextField({ name, value, placeholder, errorText, onChange }: Props) {
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
    <div>
      <input
        type="text"
        name={name}
        className={`w-full h-14 min-h-14 leading-10 pl-4 pr-12 py-3 border rounded focus:outline-none focus:border-blue-500 ${
          !!errorText ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
      {!!errorText && (
        <p className="text-red-500 text-sm mt-2">{errorText.toString()}</p>
      )}
    </div>
  );
}
export default memo(TextField);
