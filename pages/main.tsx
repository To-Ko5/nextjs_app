import Cookie from 'universal-cookie'
import { useRouter } from 'next/router'

const cookie = new Cookie()

const main = () => {
  const router = useRouter()
  const logout = () => {
    cookie.remove('access_token')
    router.push('/')
  }
  return (
    <div onClick={logout}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </div>
  )
}

export default main
