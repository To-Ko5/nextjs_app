import Head from 'next/head'
import Footer from './common/Footer'

interface Layout {
  children: React.ReactChild
  title?: string
}

const Layout = ({ children, title = 'next.js_app' }: Layout) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
