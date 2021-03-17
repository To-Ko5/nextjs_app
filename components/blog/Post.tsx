const Post = ({ post }: any) => {
  return (
    <li>
      <span>{post.id}</span>:
      <span className="cursor-pointer border-b border-gray-400 hover:bg-gray-600">
        {post.title}
      </span>
    </li>
  )
}

export default Post
