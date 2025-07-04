
import { supabase } from './supabase'
import { Task } from './types'



// Fetch tasks for logged-in user
export async function getTasks() {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Task[]
}

// Create new task
export async function createTask(task: Partial<Task>) {
  const { data, error } = await supabase.from('tasks').insert([task])
  if (error) throw error
  return data
}

// Update task
export async function updateTask(id: string, updates: Partial<Task>) {
  const { data, error } = await supabase
    .from('tasks')
    .update(updates)
    .eq('id', id)

  if (error) throw error
  return data
}

// Delete task
export async function deleteTask(id: string) {
  const { error } = await supabase.from('tasks').delete().eq('id', id)
  if (error) throw error
}
