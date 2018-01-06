import ajax from './ajax'


export const requestMain = ()=> ajax('/api')
export const requestMainOther = ()=> ajax('/test')
