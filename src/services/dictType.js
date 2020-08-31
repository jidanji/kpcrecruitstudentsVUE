/* eslint-disable */
import {
    request
  } from '@/utils/request'
  
  
  export const fetchDictType = (options) => {
    return request("/api/MathDictType/GetData", {
      method: 'POST',
      ...options
    })
}