import React from 'react'
// import Home from './components/home'
import Page from './components/page'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Post from './components/post'
import Form from './components/post/form'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Post} />
        <Stack.Screen name='Page' component={Page} />
        <Stack.Screen name='Form' component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
