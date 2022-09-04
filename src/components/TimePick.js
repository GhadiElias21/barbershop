import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker(props) {
  const [value, setValue] = React.useState(dayjs());

 

  console.log()
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
         const arrayed=Array(newValue.$d)
         const enteredStr=arrayed+[]
         const split=enteredStr.split(' ')
          setValue(newValue.$d);
          props.onAddDate(`${split[0]} ${split[1]} ${split[2]} ${split[3]} ${split[4]}`)
         ;
        }}
        minDate={dayjs('2022-09-04')}
       
      />
      
    </LocalizationProvider>
    
    </>
  );
}