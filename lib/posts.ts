import axios from 'axios'

export async function getAllPostsData() {
  const response = await axios.get(
    'https://nextjs-rest-api1.herokuapp.com/api/list-post'
  )

  if (response.status === 400) {
    throw new Error('posts failed')
  }
  return response.data
}
