export default interface Job{
  name: string,
  age: number,
  phone: string,
  state:string,
  city: string
}

export const jobClassForRef = {
  name: '',
  age: 0,
  phone: '',
  state:'',
  city: ''
}