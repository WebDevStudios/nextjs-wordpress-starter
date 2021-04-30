import getPostTypeArchive from '@/functions/wordpress/postTypes/getPostTypeArchive'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  VirtualizedList
} from 'react-native'
import HTMLView from 'react-native-htmlview'
import { Button, Card, Title } from 'react-native-paper'
import { styles } from '../ContentView'

const BlogPost = (post) => {
  const postData = post.post.item
  const navigation = useNavigation()

  // TODO - this is a workaround for local. For some reason https served images are not loading
  const featuredImage = postData?.featuredImage?.node?.sourceUrl ? postData?.featuredImage?.node?.sourceUrl.replace( 'https:', 'http:' ) : null

  console.log( postData )

  return (
    <>
      { featuredImage && (
        <Card style={ styles.card }>
          <Card.Cover source={{ uri: featuredImage }} />
        </Card>
      ) }

      <Title style={ styles.h2 }>{ postData.title }</Title>

      { postData?.excerpt && (
        <HTMLView stylesheet={styles} addLineBreaks={ null } value={ postData.excerpt.trim() } />
      ) }

      <Button style={ styles.button } onPress={ () => navigation.navigate('BlogScreen', {
        postId: postData.databaseId,
        postTitle: postData.title
      } ) }>Read more</Button>
    </>
  )
}

const getItem = (data, index) => data[index]

const getItemCount = (data) => data.length ?? 0

export default function BlogHome() {
  const [data, updateData] = useState( [] )
  useEffect(() => {
    const getData = async () => {
      const {apolloClient, ...archiveData} = await getPostTypeArchive('post')
      updateData(archiveData.posts)
    }
    getData()
  }, [])

  return (
    <SafeAreaView>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={(post) => <BlogPost post={post} />}
        keyExtractor={(post) => post.databaseId.toString()}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  )
}
