import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Input from '../input'

const fieldInput = 'border border-gray-400 rounded p-2'

const Form = ({ route }) => {
  const [data, setData] = useState({})
  const id = route.params?.id
  const handleChange = (name, value) => {
    const newData = { ...data, [name]: value }
    setData(newData)
  }
  const submit = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    if (id) url += `/${id}`
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: id ? 'PUT' : 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('submit', res)
        return true
      })
      .catch(() => false)
    if (response) {
      console.warn('Submit Success')
      !id && setData({})
    }
  }
  const getData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .catch(() => ({}))
    setData({
      ...response,
      userId: response.userId?.toString(),
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <View style={tailwind('p-4')}>
      {id && (
        <View style={tailwind('mb-6')}>
          <Text style={tailwind('mb-2')}>Id</Text>
          <Text>{data.id}</Text>
        </View>
      )}
      <View style={tailwind('mb-6')}>
        <Text style={tailwind('mb-2')}>User Id</Text>
        <Input keyboardType='number-pad' onChangeText={(value) => handleChange('userId', value)} value={data.userId} />
      </View>
      <View style={tailwind('mb-6')}>
        <Text style={tailwind('mb-2')}>Title</Text>
        <TextInput
          style={tailwind(fieldInput)}
          onChangeText={(value) => handleChange('title', value)}
          value={data.title}
        />
      </View>
      <View style={tailwind('mb-6')}>
        <Text style={tailwind('mb-2')}>Body</Text>
        <TextInput
          style={tailwind(fieldInput)}
          onChangeText={(value) => handleChange('body', value)}
          value={data.body}
        />
      </View>
      <Button onPress={submit} title='Submit' />
    </View>
  )
}

export default Form
