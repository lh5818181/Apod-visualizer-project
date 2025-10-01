import React from 'react';
import { DatePickerContainer, DateLabel } from './DatePicker.styles';
import { DatePickerInput } from '../../atoms/DatePickerInput/DatePickerInput';

interface DatePickerProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ 
  value, 
  onChange, 
  max, 
  className 
}) => {
  return (
    <DatePickerContainer
      className={className}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <DateLabel
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Selecione uma data
      </DateLabel>
      <DatePickerInput
        value={value}
        onChange={onChange}
        max={max}
      />
    </DatePickerContainer>
  );
};
