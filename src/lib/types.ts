export type Task = {
  id: string
  user_id: string
  title: string
  content?: string
  checklist?: {
    id: string
    text: string
    done: boolean
  }[]
  deadline?: string
  mood?: string
  created_at?: string
  updated_at?: string
}


export type Props = {
  onCreate: (task: Partial<Task>) => void
}
