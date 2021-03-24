import { useContext, FormEvent } from 'react'
import { StateContext } from '../../context/StateContext'
import Cookie from 'universal-cookie'
import axios from 'axios'

const cookie = new Cookie()

export default function TaskForm({ taskCreated }: any) {
  const { selectedTask, setSelectedTask }: any = useContext(StateContext)
  const create = async (e: FormEvent) => {
    e.preventDefault()
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks/`,
      { title: selectedTask.title },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${cookie.get('access_token')}`
        }
      }
    )
    if (response.status === 401) {
      alert('JWT Token not valid')
    }
    setSelectedTask({ id: 0, title: '' })
    taskCreated()
  }
  const update = async (e: FormEvent) => {
    e.preventDefault()
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks/${selectedTask.id}/`,
      { title: selectedTask.title },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${cookie.get('access_token')}`
        }
      }
    )
    if (response.status === 401) {
      alert('JWT Token not valid')
    }
    setSelectedTask({ id: 0, title: '' })
    taskCreated()
  }
  return (
    <div>
      <form onSubmit={selectedTask.id !== 0 ? update : create}>
        <input
          className="text-black mb-8 px-2 py-1"
          type="text"
          value={selectedTask.title}
          onChange={(e) =>
            setSelectedTask({ ...selectedTask, title: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-gray-500 ml-2 hover:bg-gray-600 text-sm px-2 py-1 rounded uppercase"
        >
          {selectedTask.id !== 0 ? 'update' : 'create'}
        </button>
      </form>
    </div>
  )
}
