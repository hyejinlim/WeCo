import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import React, { useState } from 'react';

interface Props {
  date: string;
  onChange: (e: any) => void;
}

const DatePickerForm = ({ date, onChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // className={classes.root}
        value={date}
        inputFormat={'YYYY-MM-DD'}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerForm;
