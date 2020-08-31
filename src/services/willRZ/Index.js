/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'



//获取用户融资申请
export const getList = (options) => {
    return requestWithToken("/fileupload/credit/applyList", {
        method: 'POST',
        ...options

    })
}


//新建用户融资申请
export const addItem = (options) => {
    return requestWithToken("/fileupload/credit/apply", {
        method: 'POST',
        ...options
    })
}


//删除用户融资申请
export const deleteItem = (options) => {
    return requestWithToken("/fileupload/credit/delete", {
        method: 'POST',
        ...options
    })
}


//修改用户融资申请
export const updateItem = (options) => {
    return requestWithToken("/fileupload/credit/applyEdit", {
        method: 'POST',
        ...options
    })
}

