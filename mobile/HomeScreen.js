import getPostTypeById from '@/functions/wordpress/postTypes/getPostTypeById'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import ContentView from './ContentView'

export default function HomeScreen() {
  const [ post, updateData ] = useState( null )

  useEffect( () => {
    const getPost = async () => {
      const {apolloClient, error, ...postData} = await getPostTypeById(
        'page',
        '/'
      )

      updateData( postData?.post )
    }

    getPost()
  }, [] )

  return (
    <SafeAreaView>
      <ScrollView>
        { post !== null && (
          <ContentView blocks={ post.blocks } />
        ) }
      </ScrollView>
    </SafeAreaView>
  )
}
