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

export async function getAllPostsIds() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post`
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

export async function getPostData(id) {
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
