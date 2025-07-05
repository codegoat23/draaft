
'use client'

import React from 'react'
import { Task } from '@/lib/types'
import Tasks from './Tasks'
import EditTask from './EditTask'

type Props = {
  tasks: Task[]
  activetask: Task | null
  isEditing: boolean
  onCreate: (task: Partial<Task>) => void
  onSelectedTask: (task: Task) => void
  onBack: () => void
  onSave: (task: Task) => void
  onDelete: (task: Task) => void
  
}

function RenderTask({
  onCreate,
  onSelectedTask,
  activetask,
  isEditing,
  tasks,
  onBack,
  onSave,
  onDelete,
}: Props) {
  if (activetask && isEditing) {
    return (
      <EditTask
        activetask={activetask}
        onBack={onBack}
        onSave={onSave}
      />
    )
  } else {
    return (
      <Tasks
        tasks={tasks}
        onCreate={onCreate}
        onSelectedTask={onSelectedTask}
        onDelete={onDelete}
      />
    )
  }
}

export default RenderTask