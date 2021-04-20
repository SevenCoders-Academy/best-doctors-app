import React, { useState } from 'react';
import { InputContainer, InputLabel, InputText, ErrorLabel } from './styles';

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <InputContainer pl={6} pt={2} pb={2} focus={focus} {...props}>
        <InputLabel>{label}</InputLabel>
        <InputText
          onEndEditing={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </InputContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};
