import { useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Task from '../components/task/task'
import { getAllTasksData } from '../lib/task'
import useSWR from 'swr'

const fetcher = (url: any) =>
  fetch(url).then((res) => {
    return res.json()
  })
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`

const task = ({ tasks }: any) => {
  const { data: tasksData, mutate } = useSWR(apiUrl, fetcher, {
    initialData: tasks
  })

  useEffect(() => {
    mutate()
  }, [])

  return (
    <Layout title="task">
      <ul className="mb-20">
        {tasksData &&
          tasksData.map((task: any) => (
            <Task key={task.id} task={task} taskDeleted={mutate} />
          ))}
      </ul>
      <Link href="/main">
        <a>
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
        </a>
      </Link>
    </Layout>
  )
}

export default task

export async function getStaticProps() {
  const tasks = await getAllTasksData()
  return {
    props: { tasks },
    revalidate: 3
  }
}
