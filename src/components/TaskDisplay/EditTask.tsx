'use client'

import React, { useState, useCallback } from 'react'
import { Task } from '@/lib/types'
import { Button } from '../ui/button'
import { IconArrowLeft, IconX } from '@tabler/icons-react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import Moodselector from '../AddTask/Moodselector'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  activetask: Task
  onBack: () => void
  onSave?: (updatedTask: Task) => void
}

function autoResize(textarea: HTMLTextAreaElement) {
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}

function EditTask({ activetask, onBack, onSave }: Props) {
  const [title, setTitle] = useState(activetask.title || '')
  const [content, setContent] = useState(activetask.content || '')
  const [checklist, setChecklist] = useState(activetask.checklist || [])
  const [deadline, setDeadline] = useState<Date>(activetask.deadline)
  const [mood, setMood] = useState<string>(activetask.mood || '')
  const [isSaving, setIsSaving] = useState(false)

  const isChecklist = Boolean(activetask.checklist)

  const toggleChecklist = useCallback((index: number) => {
    setChecklist((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    )
  }, [])

  const updateChecklist = useCallback((index: number, text: string) => {
    setChecklist((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, text } : item
      )
    )
  }, [])

  const addChecklistItem = useCallback(() => {
    setChecklist((prev) => [...prev, { id: uuidv4(), text: '', done: false }])
  }, [])

  const removeChecklistItem = useCallback((index: number) => {
    setChecklist((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const handleSave = () => {
    if (isSaving) return
    setIsSaving(true)

    const updatedTask: Task = {
      ...activetask,
      title: title || 'Untitled Task',
      mood: mood || '',
      content: !isChecklist ? content : '',
      checklist: isChecklist ? checklist : [],
      deadline: deadline instanceof Date && !isNaN(deadline.getTime()) ? deadline : undefined,
      updatedAt: new Date(),
    }

    onSave?.(updatedTask)
    onBack()
    setIsSaving(false)
  }

  return (
    <div className="p-4 w-full">
      {isSaving && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <p className="text-sm font-medium">Saving task...</p>
            <div className="mt-2 animate-spin h-5 w-5 border-2 border-t-blue-500 border-gray-300 rounded-full mx-auto" />
          </div>
        </div>
      )}

      <div className="flex flex-row justify-between items-center w-full sticky top-0 z-10">
        <Button onClick={onBack} className="hover:bg-gray-100">
          <IconArrowLeft size={16} />
        </Button>
        <Button onClick={handleSave} className="bg-black text-white hover:bg-blue-600 mt-2">
          Save
        </Button>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="text-lg font-semibold border-none focus-visible:ring-0"
        />

        {isChecklist ? (
          <div className="flex flex-col gap-2 justify-center">
            {checklist.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleChecklist(index)}
                  className="ml-7 -mt-5"
                />
                <Textarea
                  value={item.text}
                  onChange={(e) => {
                    updateChecklist(index, e.target.value)
                    autoResize(e.target)
                  }}
                  placeholder="Goal..."
                  className="w-full border-none focus-visible:ring-0 overflow-hidden resize-none"
                  rows={1}
                />
                <Button variant="ghost" size="sm" onClick={() => removeChecklistItem(index)}>
                  <IconX />
                </Button>
              </div>
            ))}
            <Button variant="outline" onClick={addChecklistItem} className="w-25 mt-2">
              + Add Item
            </Button>

            <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <Card className="flex flex-row gap-5 items-center justify-between md:w-60">
                <CardHeader>
                  <CardTitle>
                    <span className="text-xs font-semibold text-nowrap">Set Deadline:</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="text-xs">
                        {deadline
                          ? deadline instanceof Date
                            ? deadline.toDateString()
                            : new Date(deadline).toDateString()
                          : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col justify-center items-center gap-2">
                      <Calendar
                        mode="single"
                        selected={deadline}
                        onSelect={setDeadline}
                        className="rounded-lg border h-80"
                      />
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              <Card className="flex flex-row justify-between items-center md:w-90">
                <CardHeader>
                  <CardTitle className="text-[8px] text-nowrap">
                    Tag your mood before tackling this ✨:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Moodselector selectedMood={mood} setSelectedMood={setMood} />
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note here..."
            className="min-h-[calc(100vh-350px)] resize-none border-none focus-visible:ring-0"
          />
        )}
      </div>
    </div>
  )
}

export default EditTask
