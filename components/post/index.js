import React, { useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Post = ({ navigation }) => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .catch(() => [])
    setPosts(response)
  }
  const deletePost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
      .then((res) => true)
      .catch(() => false)
    console.warn('delete status: ', id, response)
    if (response) {
      const filteredData = posts.filter((post) => post.id !== id)
      setPosts(filteredData)
    }
  }
  const gotoCreatePost = () => {
    navigation.navigate('Form')
  }
  const gotoEditPost = (id) => {
    navigation.navigate('Form', { id })
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <View style={tailwind('mb-16')}>
      <Button title='Create Post' onPress={gotoCreatePost} />
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View
            key={item.id.toString()}
            style={tailwind('p-4 m-2 border border-gray-300 rounded flex flex-row justify-between items-center')}
          >
            <View style={tailwind('w-3/4')}>
              <View style={tailwind('w-12 flex justify-center items-center bg-gray-400 mb-2')}>
                <Text style={tailwind('px-2 py-1')}>{item.id.toString()}</Text>
              </View>
              <Text>{item.title}</Text>
            </View>
            <View>
              <Button onPress={() => gotoEditPost(item.id)} title='Edit' />
              <Button onPress={() => deletePost(item.id)} title='Delete' />
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Post
