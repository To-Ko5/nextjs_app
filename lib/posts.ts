import axios from 'axios'

interface post {
  id: number
  title: string
  content: string
  created_at: string
}

export async function getAllPostsData() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post`
  )

  if (response.status === 400) {
    throw new Error('posts failed')
  }
  return response.data
}

export async function getAllPostIds() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post`
  )
  if (response.status === 400) {
    throw new Error('posts failed')
  }

  const res = await response.data

  return res.map((post: post) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostData(id: any) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`
  )
  if (response.status === 400) {
    throw new Error('posts failed')
  }
  const post = response.data
  return {
    post
  }
}
