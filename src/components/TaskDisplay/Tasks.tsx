'use client'

import { Task } from '@/lib/types'
import NewButton from '../AddTask/NewButton'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import { IconCalendarCheck, IconTrash } from '@tabler/icons-react'
import Smiley from '../moods/smiley'
import Neutral from '../moods/neutral'
import Motivated from '../moods/motivated'
import Anxious from '../moods/anxious'
import { JSX } from 'react/jsx-runtime'
import Frustrated from '../moods/frustrated'

type Props = {
  
  tasks: Task[]
  onCreate: (task: Partial<Task>) => void  
  onSelectedTask: (task: Task) => void
  onDelete: (task: Task) => void  // <-- new prop
}

const moodEmojis: Record<string, JSX.Element> = {
  excited: <Smiley/>,
  neutral: <Neutral/>,
  anxious: <Anxious />,
  frustrated: <Frustrated/>,
  motivated: <Motivated/>,
};

export default function Tasks({ tasks, onCreate, onSelectedTask, onDelete }: Props) {
  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(' ')
    if (words.length <= wordLimit) return text
    return words.slice(0, wordLimit).join(' ') + '...'
  }

  // Stop click event from bubbling when clicking Delete button
  const handleDeleteClick = (e: React.MouseEvent, task: Task) => {
    e.stopPropagation()
    onDelete(task)
  }
 // Fixed getCountdown function
 const getCountdown = (deadline?: Date | string | { toDate: () => Date }) => {
  if (!deadline) {
    return <div><span className="text-xs">No Deadline</span></div>
  }

  let end: Date

  try {
    if (deadline instanceof Date) {
      end = deadline
    } else if (typeof deadline === 'string') {
      end = new Date(deadline)
    } else if (deadline && typeof deadline.toDate === 'function') {
      end = deadline.toDate()
    } else {
      return <div><span className="text-xs text-red-500">Invalid deadline</span></div>
    }

    if (isNaN(end.getTime())) {
      return <div><span className="text-xs text-red-500">Invalid Date</span></div>
    }

    const now = new Date()
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

    if (diff > 0) {
      return (
        <div className="flex gap-1 items-center w-12 h-15 justify-center rounded-lg">
          <span className="font-bold text-xs">{diff}</span>
          <span className="text-[10px]">day{diff > 1 ? 's' : ''}</span>
          <span className="text-[10px]">left</span>
        </div>
      )
    }

    if (diff === 0) {
      return <span className="text-xs text-yellow-600">Due today</span>
    }

    return (
      <span className="text-xs text-red-600">
        {Math.abs(diff)} day{Math.abs(diff) > 1 ? 's' : ''} overdue
      </span>
    )
  } catch (error) {
    console.error('Error processing deadline:', error)
    return <div><span className="text-xs text-red-500">Error</span></div>
  }
}
  


  
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full sticky top-0  z-10 flex justify-end py-2">
  <NewButton onCreate={onCreate} />
</div>


      <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
        {tasks.map(task => 
        
          
        (
          
          <div
            key={task.id}
            className="break-inside-avoid mb-4"
            onClick={() => onSelectedTask(task)}
          >
            
            <Card className="p-4 rounded-xl cursor-pointer hover:bg-gray-50 transition relative">
              
              <button
                onClick={(e) => handleDeleteClick(e, task)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                aria-label="Delete task"
                title="Delete task"
              >
                <IconTrash size={18} />
              </button>
              <div className='flex flex-row items-center '>
              {task.mood && (
        <span className="mr-1">{moodEmojis[task.mood]}</span>
      )}
              <h2 className="text-sm font-semibold ">{task.title || 'Untitled Task'}</h2>
             
              </div>
             

              {task.checklist ? (
  <>
    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
      
      {task.checklist.slice(0, 3).map(item => (
        
        <li key={item.id} className={item.done ? 'line-through text-gray-400' : ''}>
          {item.text || 'Untitled goal'}
        </li>
      ))}
      {task.checklist.length > 3 && <li className="italic text-gray-400">+ more</li>}
    </ul>
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between translate-y-2.5 items-center'>
      <span className='text-xs '>Progress</span>
      <span className='mt-2'><span className='mt-2'>
  {Math.round((task.checklist.filter(item => item.done).length / task.checklist.length) * 100)}%
</span>
</span>
      </div>
    
    <div className='flex flex-row gap-5 items-center text-sm'>
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-3 flex flex-row">
      
      <div
        className=" bg-blue-500 transition-all duration-300"
        style={{
          width: `${
            (task.checklist.filter(item => item.done).length / task.checklist.length) * 100
          }%`,
        }}
      ></div>
      
    </div>
    
    </div>
    </div>
    
    <div>
      <Card className='flex flex-row justify-between animate-glow'>
        <CardHeader>
          <CardTitle className='text-xs'>Deadline</CardTitle>
          <CardDescription className={`text-[10px] flex flex-row text-nowrap items-center gap-1 ${task.deadline && new Date(task.deadline) < new Date() ? 'text-red-500' : ''}`}>
  <IconCalendarCheck className='size-4' />
  {
  task.deadline
    ? new Date(
        typeof task.deadline === 'string'
          ? task.deadline
          : (task.deadline as Date).toISOString()
      ).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No deadline'
}

</CardDescription>

        </CardHeader>
        <CardContent>
        {getCountdown(task.deadline)}
        </CardContent>
      </Card>
    </div>
  </>
) : (
  <p className="text-xs text-gray-600">
    {truncateWords(task.content || '', 30)}
  </p>
)}

            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
