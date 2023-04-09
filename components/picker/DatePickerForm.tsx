import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { memo } from 'react';

type Props = {
  date: string;
  onChange: (e: any) => void;
};

function DatePickerForm({ date, onChange }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={date}
        inputFormat={'YYYY-MM-DD'}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} className="w-full" />}
      />
    </LocalizationProvider>
  );
}

export default memo(DatePickerForm);
