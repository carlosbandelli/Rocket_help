import { IInputProps, Input as NativeBaseInput } from 'native-base';
import React from 'react';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
        bg="gray.700"
        h={14}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        color="white"
        placeholderTextColor="gray.300"
        _focus={{
            borderWidth: 1,
            borderColor: "green.500",
            bg: "gray.700"
        }}
        { ...rest }
    />
  );
}