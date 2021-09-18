---
title: Comments
---

This explains the process of submitting comments to WordPress through the GraphQL API.

## Backend Setup

Comments posted from the frontend are treated as non-authenticated comments. That is,
the rules for moderation are the same as if this were a normal WordPress install.

Take note of your settings under Settings > Discussion as they will apply, especially
settings around comment moderation.

## Frontend Setup

Comments are rendered using the `Comments` component found in
`components/molecules/Comments`. This component renders both the comments from the
post as well as the form to post new comments.

The `validationSchema` and `isRequired` attributes on the comment form are written
for requiring name and email. If your comment settings do not require these, you
can modifiy these attributes accordingly.

The component is included in `pages/blog/[[...slug]].js` to facilitate comments
on blog posts; if you have other post types with comments enabled, you can add
the component to their pages. Make sure to pass both the comment data from the
page's GraphQL query as well as the `databaseId` of the post.

## Posting process

The comments are posted through the internal API endpoint at `api/wp/postComment.js`
and passed along to the main WordPress site over GraphQL.

The internal API will do a basic check of the HTTP headers to ensure the comment
comes from the frontend (or it at least pretends to). Once posted to WordPress,
the comment is subjected to all normal comment rules, including moderation and
Akismet spam protection.
