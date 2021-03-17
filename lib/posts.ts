import axios from 'axios'

interface post {
  id: number
  title: string
  content: string
  created_at: string
}

export async function getAllPostsData() {
  const response = await axios.get(
    'https://nextjs-rest-api1.herokuapp.com/api/list-post'
  )

  if (response.status === 400) {
    throw new Error('posts failed')
  }
  return response.data
}

export async function getAllPostsIds() {
  const response = await axios.get(
    'https://nextjs-rest-api1.herokuapp.com/api/list-post'
  )
  if (response.status === 400) {
    throw new Error('posts failed')
  }
  const res = response.data
  return res.map((post: post) => {
    params: {
      id: post.id
    }
  })
}
