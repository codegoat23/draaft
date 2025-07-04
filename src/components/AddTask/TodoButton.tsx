'use client'

import { Task } from '@/lib/types'
import { Button } from '../ui/button'
import { IconChecklist } from '@tabler/icons-react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  onCreate: (task: Partial<Task>) => void
}

function TodoButton({ onCreate }: Props) {
  const handleCreateTodo = () => {
    const newTask: Partial<Task> = {
      title: '',
      content: '',
      checklist: [
        { id: uuidv4(), text: '', done: false },
      ]
    }

    onCreate(newTask)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="bg-gray-100 text-black text-[12px] flex items-center gap-1"
      onClick={handleCreateTodo}
    >
      <IconChecklist size={16} />
      To-Do
    </Button>
  )
}

export default TodoButton
