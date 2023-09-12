export type IUser = {
  name: string,
  email: string,
  password: string
}
export type ITime = {
  index?: number,
  id?: number,
  color: string,
  price: number,
  title: string,
  user_id?: number,
}
export type IWork = {
  id: number,
  user_id: number,
  times_id: number,
  date_time: string
}