import {algoliaIndexName} from '@/lib/algolia/connector'
import {addApolloState} from '@/lib/apolloConfig'
import getPostTypeTaxonomyArchive from '../postTypes/getPostTypeTaxonomyArchive'
import isValidTaxonomy from './isValidTaxonomy'

/**
 * Retrieve static props by taxonomy.
 *
 * @author WebDevStudios
 * @param  {string} params   Taxonomy params (e.g., slug).
 * @param  {string} taxonomy Taxonomy type.
 * @param  {string} postType Post Type.
 * @return {object}          Object containing post props and revalidate setting.
 */
export default async function getTaxonomyStaticProps(
  params,
  taxonomy,
  postType = 'post'
) {
  // Set revalidate length (seconds).
  const revalidate = 60 * 5

  // Set sharedProps.
  const sharedProps = {
    algolia: {
      indexName: algoliaIndexName
    }
  }

  /* -- Handle taxonomy archives. -- */
  if (isValidTaxonomy(taxonomy)) {
    const taxonomySlug = params.slug.pop() // Last "slug" piece is the lowest-level taxonomy term slug.

    const {apolloClient, ...archiveData} = await getPostTypeTaxonomyArchive(
      taxonomy,
      taxonomySlug,
      postType
    )

    // Merge in query results as Apollo state.
    return addApolloState(apolloClient, {
      props: {
        ...archiveData,
        ...sharedProps,
        term: taxonomySlug,
        archive: true
      },
      revalidate
    })
  }

  // Return basic props object.
  return {
    props: sharedProps,
    revalidate
  }
}
