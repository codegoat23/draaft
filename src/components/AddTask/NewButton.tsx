import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { IconPlus } from '@tabler/icons-react'
import { TaskProps } from '@/lib/types'
import TodoButton from './TodoButton'

function NewButton({ onCreate }: TaskProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="bg-black text-white text-[12px] flex items-center gap-1"
        >
          <IconPlus />
          New Task
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-25 flex flex-col justify-center items-center gap-2">
        
        <TodoButton onCreate={onCreate} /> {/* ✅ Fixed: pass onCreate */}
      </PopoverContent>
    </Popover>
  )
}

export default NewButton
