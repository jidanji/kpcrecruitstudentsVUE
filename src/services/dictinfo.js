/* eslint-disable */
import {request} from '@/utils/request'

//获取专业信息
export const fetchZhuanYeDict =(options) => {
  return request("/api/MathDict/GetZhuanYeDict", {
    method: 'POST',
    ...options
  })
}


//获取字典信息
export const fetchDictArray = (options) => {
  return request("/api/MathDict/GetData", {
    method: 'POST',
    ...options
  })
}

//新建字典信息
export const addDict = (options) => {
  return request("/api/MathDict/AddMathDict", {
    method: 'POST',
    ...options
  })
}

//新建字典信息
export const updateDict = (options) => {
  return request("/api/MathDict/UpdateMathDict", {
    method: 'POST',
    ...options
  })
}

//删除字典信息
export const deleteDict = (options) => {
  return request("/api/MathDict/DeleteMathDict", {
    method: 'POST',
    ...options
  })
}





