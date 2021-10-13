import React from 'react'
import { TextInput } from 'react-native'
import tailwind from 'tailwind-rn'

const Input = ({ keyboardType, onChangeText, value }) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      style={tailwind('border border-gray-400 rounded p-2')}
      onChangeText={onChangeText}
      value={value}
    />
  )
}

export default Input
