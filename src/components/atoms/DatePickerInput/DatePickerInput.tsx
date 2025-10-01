import React from 'react';
import { StyledDateInput } from './DatePickerInput.styles';

interface DatePickerInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max?: string;
  className?: string;
}

export const DatePickerInput: React.FC<DatePickerInputProps> = ({ 
  value, 
  onChange, 
  max, 
  className 
}) => {
  return (
    <StyledDateInput
      type="date"
      value={value}
      onChange={onChange}
      max={max}
      className={className}
    />
  );
};
