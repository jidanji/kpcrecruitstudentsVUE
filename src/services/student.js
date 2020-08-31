/* eslint-disable */
import {
  request
} from '@/utils/request'


export const fetchStudent = (options) => {
  return request("/api/Student/GetData", {
    method: 'POST',
    ...options
  })
}

export const addStudent = (options) => {
  return request("/api/Student/AddStudent", {
    method: 'POST',
    ...options
  })
}

export const updateStudent = (options) => {
  return request("/api/Student/UpdateStudent", {
    method: 'POST',
    ...options
  })
}

export const deleteStudentById = (options) => {
  return request("/api/Student/DeleteStudentById", {
    method: 'POST',
    ...options
  })
}
