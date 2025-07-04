import React from 'react'
import { TaskProps } from '@/lib/types'

import NewButton from '../AddTask/NewButton'


function EmptyState({ onCreate }: TaskProps) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-2 text-[13px]'>
      <span>Create your first task to get started</span>
      <NewButton onCreate={onCreate}/>
    </div>
  )
}

export default EmptyState
