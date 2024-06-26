export interface IButton {
  text: string,
  isDisabled: boolean,
  typeButton: string
}

export interface ITabs {
  text: string,
  typeButton: string,
  isDisabled: boolean
}
export interface IPost {
  "id": number,
  "image": string,
  "text": string,
  "date": string,
  "lesson_num": number,
  "title": string,
  "description": string,
  "author": number
}

export interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  lesson_num: number,
  title: string,
  description: string,
  author: number
}

export interface IInput {
  title: string,
  type: string,
  placeholder: string,
  autocomplete?: string,
  onChange?: (event: any) => void,
  maxLength: number
}

export interface ISearchResultPosts {
  count: number,
  next: null | string,
  previous: null | string,
  results: IPost[]
}

export interface IInitialState {
  like: number,
  dislike: number,
  favorites: [] | IPost[],
  selectedTab: string
  status: null | string,
  error: null | string,
  blogs: [] | IPost[],
  selectedPost: null | IPost[],
  searchResultPosts: ISearchResultPosts | null
}