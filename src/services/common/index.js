/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'

//登录
export const login = (options) => {
   
    return request('/sso-manager/iApi/loginWithPassword', {
        method: 'POST',
        ...options
    })
}
