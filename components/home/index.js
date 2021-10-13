import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, FlatList, Image, Platform, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'

const Home = ({ appName, navigation }) => {
  const [state, setState] = useState(false)
  return (
    <View>
      {Platform.OS !== 'ios' && (
        <View>
          <FlatList
            data={[{ key: 'Cat' }, { key: 'Dog' }, { key: 'Goat' }]}
            renderItem={({ item }) => (
              <Text style={{ textAlign: 'left', borderBottomColor: 'black', borderBottomWidth: 1 }}>{item.key}</Text>
            )}
          />
        </View>
      )}
      <ScrollView horizontal>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
          <View style={{ width: 500, height: 70, backgroundColor: 'blue', margin: 2 }}>
            <Text>A</Text>
          </View>
          <View style={{ width: 500, height: 70, backgroundColor: 'blue', margin: 2 }}>
            <Text>A</Text>
          </View>
          <View style={{ width: 500, height: 70, backgroundColor: 'blue', margin: 2 }}>
            <Text>A</Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <View>
          <Text>{state ? 'True' : 'False'}</Text>
        </View>
        <View>
          <Text>{appName}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Button onPress={() => setState(!state)} title='Change State' />
        </View>
        <View style={{ margin: 10 }}>
          <Button onPress={() => navigation.navigate('Page')} title='GO TO PAGE' />
        </View>
      </View>
      <ScrollView>
        <Image style={{ width: 300, height: 'auto' }} source={require('./cat.jpg')} width={300} height={120} />
        <Image style={{ width: 300, height: 'auto' }} source={require('./cat.jpg')} width={300} height={120} />
        <Image style={{ width: 300, height: 'auto' }} source={require('./cat.jpg')} width={300} height={120} />
        <Image style={{ width: 300, height: 'auto' }} source={require('./cat.jpg')} width={300} height={120} />
        <Image style={{ width: 300, height: 'auto' }} source={require('./cat.jpg')} width={300} height={120} />
        <Image style={{ width: 300, height: 'auto' }} source={require('./cat.jpg')} width={300} height={120} />
        <Image style={{ width: 300, height: 'auto' }} source={require('./cat.jpg')} width={300} height={120} />
      </ScrollView>
      {/* <StatusBar style='auto' /> */}
    </View>
  )
}

export default Home
