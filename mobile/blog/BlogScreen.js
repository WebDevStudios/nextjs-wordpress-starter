import getPostTypeById from '@/functions/wordpress/postTypes/getPostTypeById'
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { ActivityIndicator, Card, Colors, Title } from 'react-native-paper'
import ContentView, { styles } from '../ContentView'

export default function BlogScreen() {
  const route = useRoute()

  // If postId is not in params, unexpected error occured
  if ( ! route.params.postId ) {
    return
  }
  const [post, updatePost] = useState( null )

  useEffect( () => {
    const getData = async () => {
      const {apolloClient, error, ...postData} = await getPostTypeById(
        'post',
        route.params.postId,
        'DATABASE_ID',
        null
      )

      updatePost( postData?.post )
    }

    getData()
  }, [] )

  console.log( post )

  // Handle loading
  if ( null === post ) {
    return (
      <>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </>
    )
  }

  // TODO - this is a workaround for local. For some reason https served images are not loading
  const featuredImage = post?.featuredImage?.node?.sourceUrl ? post?.featuredImage?.node?.sourceUrl.replace( 'https:', 'http:' ) : null

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          { featuredImage && (
            <Card style={ styles.card }>
              <Card.Cover source={{ uri: featuredImage }} />
            </Card>
          ) }

          <Title style={ styles.postTitle }>{ post.title }</Title>

          { post !== null && (
            <ContentView blocks={ post.blocks } />
          ) }
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
