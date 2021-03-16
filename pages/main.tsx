import Cookie from 'universal-cookie'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Link from 'next/link'

const cookie = new Cookie()

const main = () => {
  const router = useRouter()
  const logout = () => {
    cookie.remove('access_token')
    router.push('/')
  }
  return (
    <Layout title="main">
      <div className="mb-10 md:flex">
        <Link href="/blog">
          <a className="block bg-indigo-500 mb-8 md:mb-0 md:mr-8 hover:bg-indigo-600 text-white px-24 py-12 rounded">
            Blog
            {/* by SSG + ISR */}
          </a>
        </Link>
        <Link href="/task">
          <a className="block bg-gray-500 hover:bg-gray-600 text-white px-24 py-12 rounded">
            Task
            {/* by ISR + CSR */}
          </a>
        </Link>
      </div>

      <div className="mt-10 flex cursor-pointer w-20 h-6">
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={logout}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span>Logout</span>
      </div>
    </Layout>
  )
}

export default main
