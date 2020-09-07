import * as constants from './constants'

export const user=(text)=>{
  return{
type: constants.USER,
payload:text,
}
}

export const register=(text)=>{
  return{
type: constants.REGISTER,
payload:text,
}
}