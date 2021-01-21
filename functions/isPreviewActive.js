/**
 * Check if preview mode is active for current post view.
 *
 * @param {object} post        Current post object.
 * @param {object} previewData Post preview object.
 * @return {boolean}           Whether preview mode is active for current view.
 */
export default function isPreviewActive(post, previewData) {
  const previewId = previewData?.page?.id
  const postId = post?.databaseId

  // Not in preview mode if either ID is missing.
  if (!previewId || !postId) {
    return false
  }

  // Only in preview mode if IDs match.
  return previewId === postId
}
