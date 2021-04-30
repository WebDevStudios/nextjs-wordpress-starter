import getPostTypeById from '@/functions/wordpress/postTypes/getPostTypeById';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ActivityIndicator, Card, Colors, Paragraph, Title } from 'react-native-paper';
import ContentView, { styles } from '../ContentView';

export default function TeamScreen() {
  const route = useRoute()

  // If postId is not in params, unexpected error occured
  if ( ! route.params.postId ) {
    return
  }

  const [post, updatePost] = useState( null )

  useEffect( () => {
    const getData = async () => {
      const {apolloClient, error, ...postData} = await getPostTypeById(
        'team',
        route.params.postId,
        'DATABASE_ID',
        null
      )

      updatePost( postData?.post )
    }

    getData()
  }, [] )

  // Handle loading
  if ( null === post ) {
    return (
      <>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </>
    )
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Card>
            <Card.Content>
              <Title style={ styles.teamTitle }>{ post.title }</Title>
              <Paragraph>{ post.teamMemberProfile.title }</Paragraph>
              <Paragraph>{ post.teamMemberProfile.location }</Paragraph>
            </Card.Content>
          </Card>

          { post !== null && (
            <ContentView blocks={ post.blocks } />
          ) }
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
