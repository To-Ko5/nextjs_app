import axios from 'axios'

export async function getAllTaskData() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  )

  if (response.status === 400) {
    throw new Error('posts failed')
  }

  return response.data
}
