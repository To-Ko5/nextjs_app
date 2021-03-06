import axios from 'axios'

export async function getAllTasksData() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  )

  if (response.status === 400) {
    throw new Error('posts failed')
  }

  return response.data
}

export async function getAllTaskIds() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  )

  if (response.status === 400) {
    throw new Error('posts failed')
  }

  const res = await response.data

  return res.map((task: any) => {
    return {
      params: {
        id: String(task.id)
      }
    }
  })
}

export async function getTaskData(id: any) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`
  )

  if (response.status === 400) {
    throw new Error('posts failed')
  }

  const task = response.data

  return {
    task
  }
}
