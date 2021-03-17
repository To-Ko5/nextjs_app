import Link from 'next/link'

const Post = ({ post }: any) => {
  return (
    <li>
      <Link href={`/posts/${post.id}`}>
        <a>
          <span>{post.id}</span>:
          <span className="cursor-pointer border-b border-gray-400 hover:bg-gray-600">
            {post.title}
          </span>
        </a>
      </Link>
    </li>
  )
}

export default Post
