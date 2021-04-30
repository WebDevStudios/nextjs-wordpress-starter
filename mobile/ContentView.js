import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'
import { Button } from 'react-native-paper'
import Image from 'react-native-scalable-image'

const screenWidth = Dimensions.get('window').width

const renderNode = ( node, index, siblings, parent, defaultRenderer ) => {
  const attr = node.attribs

  if ( 'img' === node.name ) {
    return (
      <Image
        key={ attr.src }
        width={ screenWidth }
        source={{uri: attr.src}}
      />
    )
  }

  if ( 'button' === node.name ) {
    return (
      <Button key={ attr.value } style={ styles.button } mode="contained">{ attr.value }</Button>
    )
  }
}

const processContent = ( blocks ) => {
  const content = blocks.map( ( block ) => {
    // Recursive inner blocks
    if ( Array.isArray( block?.innerBlocks ) && block.innerBlocks.length > 0 ) {
      return processContent( block.innerBlocks )
    }

    const attr = block.attributes

    switch ( block.name ) {
      case "core/heading":
        return `<h${attr.level}>${ attr.content }</h${attr.level}>`

      case "core/paragraph":
        // We wrap the content with <p> to make HTMLView work
        return `<p>${ attr.content }</p>`

      case "core/image":
        return `<img src="${ attr.url.replace( 'https:', 'http:' ) }" />`

      case "core/button":
        return `<button type="text" value="${ attr.text }" url="${ attr.url }"/>`

      case "core/quote":
        return `${ attr.value }`

      default:
        return ''
    }
  } )

  return content.join( '' )
}

const ContentView = ( blocksObject ) => {
  let content = ''
  if ( Array.isArray( blocksObject?.blocks ) && blocksObject.blocks.length > 0 ) {
    content = processContent( blocksObject.blocks )
  }

  return (
    <HTMLView stylesheet={styles} addLineBreaks={ null } value={ content } renderNode={ renderNode } />
  )
}

export const styles = StyleSheet.create({
  p: {
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  h3: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  h4: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  button: {
    marginVertical: 8
  },
  card: {
    marginVertical: 8
  },
  postTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  teamTitle: {
    paddingTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default ContentView
