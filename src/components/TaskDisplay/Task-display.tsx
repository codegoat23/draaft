'use client'

import React, { useEffect, useState } from 'react'
import { Task } from '@/lib/types'
import EmptyState from './EmptyState'
import RenderTask from './RenderTask'
import { supabase } from '@/lib/supabase'

function Taskdisplay() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUserAndTasks() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        setUserId(user.id)

        const { data, error } = await supabase
          .from('tasks')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching tasks:', error)
          setTasks([])
        } else {
          setTasks(data || [])
        }
      } else {
        setTasks([])
      }

      setLoading(false)
    }

    getUserAndTasks()
  }, [])

  const createNewTask = async (task: Partial<Task>) => {
    if (!userId) return alert('User not logged in')
  
    const newTask = {
      ...task,
      user_id: userId,
      created_at: new Date().toISOString(),
    }
  
    const { data, error } = await supabase
      .from('tasks')
      .insert(newTask)
      .select()
      .single()
  
    if (error) {
      console.error('Error creating task:', error)
    } else if (data) {
      setTasks((prev) => [data, ...prev])
      setActiveTask(data)
      setIsEditing(true)
    }
  }
  

  const selectTask = (task: Task) => {
    setActiveTask(task)
    setIsEditing(true)
  }

  const getBack = () => {
    setActiveTask(null)
    setIsEditing(false)
  }

  const saveTask = async (updatedTask: Task) => {
    if (!updatedTask.id) return

    const { data, error } = await supabase
      .from('tasks')
      .update({
        title: updatedTask.title,
        content: updatedTask.content,
        checklist: updatedTask.checklist,
        mood: updatedTask.mood,
        deadline: updatedTask.deadline,
        updated_at: new Date().toISOString(),
      })
      .eq('id', updatedTask.id)
      .select()
      .single()

    if (error) {
      console.error('Error updating task:', error)
    } else if (data) {
      setTasks((prev) => prev.map((task) => (task.id === data.id ? data : task)))
      setActiveTask(null)
      setIsEditing(false)
    }
  }

  const deleteTask = async (taskToDelete: Task) => {
    if (!taskToDelete.id) return

    const { error } = await supabase.from('tasks').delete().eq('id', taskToDelete.id)

    if (error) {
      console.error('Error deleting task:', error)
    } else {
      setTasks((prev) => prev.filter((task) => task.id !== taskToDelete.id))
      if (activeTask?.id === taskToDelete.id) {
        setActiveTask(null)
        setIsEditing(false)
      }
    }
  }

  if (loading) return <p>Loading tasks...</p>

  return (
    <div className="w-full h-full p-6">
      {tasks.length === 0 ? (
        <EmptyState onCreate={createNewTask} />
      ) : (
        <RenderTask
          tasks={tasks}
          activetask={activeTask}
          isEditing={isEditing}
          onCreate={createNewTask}
          onSelectedTask={selectTask}
          onBack={getBack}
          onSave={saveTask}
          onDelete={deleteTask}
        />
      )}
    </div>
  )
}

export default Taskdisplay
