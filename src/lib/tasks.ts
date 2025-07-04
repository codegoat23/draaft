// lib/tasks.ts

import { supabase } from './supabase'
import { Task } from './types'

export async function getUserTasks(userId: string) {
  
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
  return data || []
}

export async function createTask(userId: string, task: Partial<Task>) {
    
  
    const { data, error } = await supabase.from('tasks').insert([
      {
        user_id: userId,
        title: task.title ?? 'Untitled Task',
        content: task.content ?? '',
        checklist: task.checklist ?? [],
        mood: task.mood ?? '',
        deadline: task.deadline,
      },
    ])
  
    if (error) {
      console.error('Error creating task:', error)
      return null
    }
    return data?.[0]
  }
  

  export async function updateTask(taskId: string, userId: string, updates: Partial<Task>) {
  
  
    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', taskId)
      .eq('user_id', userId)
  
    if (error) {
      console.error('Error updating task:', error)
      return null
    }
    return data?.[0]
  }
  
  export async function deleteTask(taskId: string, userId: string) {
   
  
    const { error } = await supabase.from('tasks').delete().eq('id', taskId).eq('user_id', userId)
  
    if (error) {
      console.error('Error deleting task:', error)
      return false
    }
    return true
  }
  