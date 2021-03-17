import Link from 'next/link'

const task = ({ task }: any) => {
  return (
    <div>
      <span>{task.id}</span>
      <span>:</span>
      <Link href={`/tasks/${task.id}`}>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
          {task.title}
        </span>
      </Link>
    </div>
  )
}

export default task
