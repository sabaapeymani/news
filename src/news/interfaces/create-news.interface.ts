export interface CreateNewsInterface {
  title: string
  excerpt?: string
  content: string
}

export interface CreateNewsResponseInterface {
  id: number
  title: string
  excerpt?: string
  content: string
  created: Date
}