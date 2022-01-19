---
title: Custom Post Types
---

Our Next.js starter supports Custom Post Types. Use the example queries and handling for [posts](https://nextjs-wordpress-starter.vercel.app/post-archive/) as a starting point.

## Workflow

1. Register a Custom Post Type
2. Create a new folder in the `/pages` directory of the Next.js WordPress Starter
3. Name the folder to match your CPT slug (e.g, if your CPT slug was `products`, name the folder `/products`)
4. Create a [catch-all route file](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes) named `[[...slug]].js`
5. Build your query inside `/products/[[...slug]].js`

## Example

The following code samples would add frontend handling for a CPT called `team` with GraphQL single name `team` and plural name `teams`.

### Catch-all Route

File: `pages/team/[[...slug]].js`

```js
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Blocks from '@/components/molecules/Blocks'
import Archive from '@/components/organisms/Archive'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getPostTypeStaticPaths from '@/functions/wordpress/postTypes/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'

// Define route post type.
const postType = 'team'

/**
 * Render the Team component.
 *
 * @author WebDevStudios
 * @param  {object}  props            The component attributes as props.
 * @param  {object}  props.post       Post data from WordPress.
 * @param  {boolean} props.archive    Whether displaying single post (false) or archive (true).
 * @param  {Array}   props.posts      Array of post data from WordPress.
 * @param  {object}  props.pagination Archive pagination data from WordPress.
 * @return {Element}                  The Team component.
 */
export default function Team({post, archive, posts, pagination}) {
  if (archive) {
    return (
      <Layout seo={{...post?.seo}}>
        <Container>
          <Archive posts={posts} postType={postType} pagination={pagination} />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout seo={{...post?.seo}}>
      <Container>
        <article className="innerWrap">
          {!!post?.seo?.breadcrumbs && (
            <Breadcrumbs breadcrumbs={post.seo.breadcrumbs} />
          )}
          <RichText tag="h1">{post?.title}</RichText>
          <p>
            {post?.teamMemberProfile?.title} -{' '}
            {post?.teamMemberProfile?.location}
          </p>
          <Blocks blocks={post?.blocks} />
        </article>
      </Container>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @author WebDevStudios
 * @return {object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType)
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @param  {object}  context             Context for current post.
 * @param  {object}  context.params      Route parameters for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {object}  context.previewData Post preview data.
 * @return {object}                      Post props.
 */
export async function getStaticProps({params, preview, previewData}) {
  return getPostTypeStaticProps(params, postType, preview, previewData)
}

Team.propTypes = {
  ...getPagePropTypes(postType)
}
```

### Team Single Query

File: `lib/wordpress/teams/queryTeamById.js`

```js
import authorPostFields from '@/lib/wordpress/_query-partials/authorPostFields'
import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import featuredImagePostFields from '@/lib/wordpress/_query-partials/featuredImagePostFields'
import globalPostFields from '@/lib/wordpress/_query-partials/globalPostFields'
import seoPostFields from '@/lib/wordpress/_query-partials/seoPostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve single team member fields.
const singleTeamFragment = gql`
  fragment SingleTeamFields on Team {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve team member by specified identifier.
const queryTeamById = gql`
  query GET_TEAM_BY_ID(
    $id: ID!
    $idType: TeamIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    team(id: $id, idType: $idType) {
      ...SingleTeamFields
    }
  }
  ${singleTeamFragment}
`

export default queryTeamById
```

### Team Archive Query

File: `lib/wordpress/teams/queryTeamsArchive.js`

```js
import archiveData from '@/lib/wordpress/_query-partials/archiveData'
import defaultPageData from '@/lib/wordpress/_query-partials/defaultPageData'
import featuredImagePostFields from '@/lib/wordpress/_query-partials/featuredImagePostFields'
import globalPostFields from '@/lib/wordpress/_query-partials/globalPostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve archive team fields.
const archiveTeamFragment = gql`
  fragment ArchiveTeamFields on Team {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`

// Query: retrieve teams archive.
const queryTeamsArchive = gql`
  query GET_TEAMS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    ${defaultPageData}
    teams(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archiveData}
      edges {
        node {
          ...ArchiveTeamFields
        }
      }
    }
  }
  ${archiveTeamFragment}
`

export default queryTeamsArchive
```

### Update Post Types

File: `lib/wordpress/_config/postTypes.js`

```diff
  // Define valid WP post types (singular and plural GraphQL names).
  export const postTypes = {
    page: {
      pluralName: 'pages',
      route: ''
    },
    post: {
      pluralName: 'posts',
      route: ''
    },
+   team: {
+     pluralName: 'teams',
+     route: 'team'
+   }
  }

  // Define hierarchical post types.
  export const hierarchicalPostTypes = ['page']
```

### Update Archive SEO

File: `lib/wordpress/_config/archiveQuerySeo.js`

```diff
  import queryPostsArchive from '@/lib/wordpress/posts/queryPostsArchive'
+ import queryTeamsArchive from '@/lib/wordpress/teams/queryTeamsArchive'

  // Define SEO for archives.
  const archiveQuerySeo = {
    post: {
      query: queryPostsArchive,
      title: 'Blog',
      description: ''
    },
+   team: {
+     query: queryTeamsArchive,
+     title: 'Team Members',
+     description: ''
+   }
  }

  export default archiveQuerySeo
```

### Update Single Post Query Handling

File: `functions/wordpress/postTypes/getPostTypeById.js`

```diff
  import isHierarchicalPostType from '@/functions/wordpress/postTypes/isHierarchicalPostType'
  import processPostTypeQuery from '@/functions/wordpress/postTypes/processPostTypeQuery'
  import queryPageById from '@/lib/wordpress/pages/queryPageById'
  import queryPostById from '@/lib/wordpress/posts/queryPostById'
+ import queryTeamById from '@/lib/wordpress/teams/queryTeamById'

  /**
  * Retrieve single post by specified identifier.
  *
  * @author WebDevStudios
  * @param  {string}          postType WP post type.
  * @param  {number | string} id       Post identifier.
  * @param  {string}          idType   Type of ID.
  * @param  {string}          preview  Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
  * @return {object}                   Object containing Apollo client instance and post data or error object.
  */
  export default async function getPostTypeById(
    postType,
    id,
    idType = 'SLUG',
    preview = null
  ) {
    // Define single post query based on post type.
    const postTypeQuery = {
      page: queryPageById,
      post: queryPostById,
+     team: queryTeamById
    }

    // Check if post type is hierarchical.
    const isHierarchical = isHierarchicalPostType(postType)

    // Fix default ID type for hierarchical posts.
    idType = !isHierarchical || 'SLUG' !== idType ? idType : 'URI'

    // Retrieve post type query.
    const query = postTypeQuery?.[postType] ?? null

    return processPostTypeQuery(postType, id, query, {id, idType}, preview)
  }
```
