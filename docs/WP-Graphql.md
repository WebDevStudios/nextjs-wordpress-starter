# Introduction <!-- omit in toc -->

This describes the use of GraphQL and the [WP GraphQL plugin](https://www.wpgraphql.com/).

## Table of Contents <!-- omit in toc -->

- [How is GraphQL Different?](#how-is-graphql-different)
- [What is WP GraphQL?](#what-is-wp-graphql)
- [Extending WP GraphQL](#extending-wp-graphql)

## How is GraphQL Different?

[GraphQL](https://graphql.org/) is an API standard that promotes discoverability and
efficiency of queries. Instead of a REST API, with different "endpoints" for different
resources, GraphQL uses a single endpoint and a query contained in the body of the
request.

To get the WordPress post with ID `23304`, you would send a `GET` request to the
URL `/wp-json/wp/v2/posts/23304`. This would give you a JSON object something
like this:

```json
{
  "id": 23304,
  "date": "2021-03-09T12:00:10",
  "date_gmt": "2021-03-09T17:00:10",
  "guid": {
    "rendered": "https://webdevstudios.com/?p=23304"
  },
  "modified": "2021-03-09T15:48:12",
  "modified_gmt": "2021-03-09T20:48:12",
  "slug": "next-js-headless-wordpress",
  "status": "publish",
  "type": "post",
  "link": "https://webdevstudios.com/2021/03/09/next-js-headless-wordpress/",
  "title": {
    "rendered": "Using Next.js, WebDevStudios Built a 1,000 Page Headless WordPress Website"
  },
  "content": {
    "rendered": "<p>Last spring, I started dabbling with Next.js and it didn’t take long for “dabbling” to turn into, “Whoa! This is awesome!” ...",
    "protected": false
  },
  "excerpt": {
    "rendered": "<p>Last spring, I started dabbling with Next.js and it didn’t take long for “dabbling” to turn into, “Whoa! This is awesome!” ...",
    "protected": false
  },
  "comment_status": "open",
  "ping_status": "closed",
  "sticky": false,
  "template": "",
  "format": "standard",
  "meta": {
    "spay_email": ""
  },
  "categories": [13208, 13213],
  "tags": [13204],
  "acf": {
    "blog_hero_image": {
      "ID": 23428,
      "id": 23428,
      "filename": "nextjs-wordpress-1000-page-website.jpg",
      "filesize": 199991,
      "url": "https://webdevstudios.com/wp-content/uploads/2021/03/nextjs-wordpress-1000-page-website.jpg",
      "link": "https://webdevstudios.com/2021/03/09/next-js-headless-wordpress/nextjs-wordpress-1000-page-website/",
      "alt": "This is a photograph from the Electric Mile Drive Thru light Rave at the Santa Anita Race Track, Arcadia, California. It is a series of colorfully lit grids.",
      "width": 1920,
      "height": 720,
      "sizes": {
        "thumbnail": "https://webdevstudios.com/wp-content/uploads/2021/03/nextjs-wordpress-1000-page-website-150x150.jpg",
        "thumbnail-width": 150,
        "thumbnail-height": 150,
        "medium": "https://webdevstudios.com/wp-content/uploads/2021/03/nextjs-wordpress-1000-page-website-300x113.jpg",
        "medium-width": 300,
        "medium-height": 113,
        "medium_large": "https://webdevstudios.com/wp-content/uploads/2021/03/nextjs-wordpress-1000-page-website-768x288.jpg",
        "medium_large-width": 768,
        "medium_large-height": 288,
        "large": "https://webdevstudios.com/wp-content/uploads/2021/03/nextjs-wordpress-1000-page-website-1024x384.jpg",
        "large-width": 850,
        "large-height": 319
      }
    }
  },
  "jetpack_featured_media_url": "",
  "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v15.9.2 - https://yoast.com/wordpress/plugins/seo/ -->...<!-- / Yoast SEO Premium plugin. -->",
  "amp_validity": null,
  "amp_enabled": true,
  "_links": {
    "self": [
      {
        "href": "https://webdevstudios.com/wp-json/wp/v2/posts/23304"
      }
    ],
    "wp:term": [
      {
        "taxonomy": "category",
        "embeddable": true,
        "href": "https://webdevstudios.com/wp-json/wp/v2/categories?post=23304"
      },
      {
        "taxonomy": "post_tag",
        "embeddable": true,
        "href": "https://webdevstudios.com/wp-json/wp/v2/tags?post=23304"
      }
    ]
  }
}
```

Theoretically, this contains all the information that pertains to this page. It also
contains a bunch of other data that might not be necessary (even more than is listed
here; [check the original](https://webdevstudios.com/wp-json/wp/v2/posts/)). More
importantly, while it contains references to other information (like categories),
getting any information about that requires another request to another REST endpoint.
While WordPress' API does contain links to those other endpoints, other APIs do not,
requiring well-written documentation for the API to be useful.

With GraphQL, there is a single endpoint; the API instead relies on queries sent in
the body of a `POST` request. To get a little information about the article above
would take a query like:

```graphql
query MyQuery {
  postBy(postId: 23304) {
    databaseId
    date
    content(format: RENDERED)
    title
    slug
    categories {
      nodes {
        name
        link
      }
    }
  }
}
```

This would then return a JSON object formatted like the query:

```json
{
  "data": {
    "postBy": {
      "databaseId": 23304,
      "date": "2021-03-09T12:00:10",
      "content": "<p>Last spring, I started dabbling with Next.js and it didn’t take long for “dabbling” to turn into, “Whoa! This is awesome!” ...",
      "title": "Using Next.js, WebDevStudios Built a 1,000 Page Headless WordPress Website",
      "slug": "next-js-headless-wordpress",
      "categories": {
        "nodes": [
          {
            "name": "Headless CMS",
            "link": "https://webdevstudios.com/category/headless-cms/"
          },
          {
            "name": "Next.js",
            "link": "https://webdevstudios.com/category/next-js/"
          }
        ]
      }
    }
  }
}
```

In addition to filtering out unnecessary information, GraphQL also allows
a single query to pull back related information that would otherwise require
another API request.

## What is WP GraphQL?

WP GraphQL is a plugin that creates a GraphQL schema for WordPress. The
endpoint is `/graphql`.

Because GraphQL is strongly typed, the API is explorable. The WP GraphQL
plugin comes with [GraphiQL](https://github.com/graphql/graphiql), an
in-browser explorer that allows exploration of the entire API. You can
find it in the WordPress admin screen under GraphQL > GraphiQL IDE.

## Extending WP GraphQL

The WP GraphQL plugin can be extended to show custom post types and
custom meta fields. The WordPress Starter already has several plugins
installed to do just this:

- Add WPGraphQL SEO (for Yoast SEO)
- WP GraphQL Gutenberg (adds the full JSON objects for individual blocks)
- WPGraphQL for Advanced Custom Fields (adds meta fields from ACF)
- WPGraphQL for Gravity Forms
- WPGraphQL Tax Query

Information about extending WP GraphQL directly can be found at the
[WP GraphQL developer documentation](https://www.wpgraphql.com/developer-reference/).
