import Layout from '../components/Layout'
import Link from 'next/link'

const blog = () => {
  return (
    <Layout title="blog">
      <Link href="/main">
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
      </Link>
    </Layout>
  )
}

export default blog
