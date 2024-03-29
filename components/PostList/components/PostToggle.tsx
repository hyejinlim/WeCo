import { ChangeEvent, Fragment, memo, ReactNode, useState } from 'react';

type Props = {
  label?: ReactNode;
  onToggleChange: (checked: boolean) => void;
};
function PostToggle({ label = '', onToggleChange }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onToggleChange && onToggleChange(checked);
  };

  return (
    <Fragment>
      {!!label && (
        <span className="font-bold text-2xl mr-6 tracking-tight">{label}</span>
      )}
      <label
        htmlFor="checked-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id="checked-toggle"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleChange}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
      </label>
    </Fragment>
  );
}

export default memo(PostToggle);
