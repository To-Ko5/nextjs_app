import Layout from '../components/Layout'
import Link from 'next/link'
import { getAllPostsData } from '../lib/posts'
import Post from '../components/blog/Post'

const blog = ({ posts }: any) => {
  return (
    <Layout title="blog">
      <ul className="mb-20">
        {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
      </ul>
      <Link href="/main">
        <a>
          <svg
            className="w-6 h-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back</span>
        </a>
      </Link>
    </Layout>
  )
}

export default blog

export async function getStaticProps() {
  const posts = await getAllPostsData()
  return {
    props: { posts }
  }
}
