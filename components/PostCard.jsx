import React from 'react'

const PostCard = ({ post, excerpt }) => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard