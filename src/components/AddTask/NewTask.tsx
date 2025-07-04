'use client'

import React from 'react'
import { Button } from '../ui/button'
import { IconNote } from '@tabler/icons-react'
import { Task } from '@/lib/types'

type NewTaskProps = {
  onCreate: (task: Partial<Task>) => void
}

function NewTask({ onCreate }: NewTaskProps) {
  const handleCreateEmptyTask = () => {
    const newTask: Partial<Task> = {
      title: '',
      content: '',
      checklist: null, // make sure it's null or undefined if not used
    }

    onCreate(newTask)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="bg-gray-100 text-black text-[12px] flex items-center gap-1"
      onClick={handleCreateEmptyTask}
    >
      <IconNote />
      Note
    </Button>
  )
}

export default NewTask
