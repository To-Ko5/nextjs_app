import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

const post = ({ post }: any) => {
  const router = useRouter()

  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }
  return (
    <Layout title={post.post.title}>
      <p className="m-4">
        {'ID : '}
        {post.post.id}
      </p>
      <p className="mb-4 text-xl font-bold">{post.post.title}</p>
      <p className="mb-12">{post.post.created_at}</p>
      <p className="px-10">{post.post.content}</p>
      <Link href="/blog">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back</span>
        </div>
      </Link>
    </Layout>
  )
}

export default post

export async function getStaticPaths() {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({ params }: any) {
  const post = await getPostData(params.id)
  return {
    props: {
      post
    },
    revalidate: 3
  }
}
