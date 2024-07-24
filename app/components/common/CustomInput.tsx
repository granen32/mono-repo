import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { CustomInputProps } from '@/app/types/common';


const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#d3d3d3',
    },
    '&:hover fieldset': {
      borderColor: '#a9a9a9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a9a9a9',
    },
  },
  '& .MuiInputBase-input': {
    color: '#a9a9a9',
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#a9a9a9',
  },
});

const CustomInput = ({ placeholder, onChange }:CustomInputProps) => {
  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
    />
  );
};

export default CustomInput;