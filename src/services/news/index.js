/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'




//获取列表数据
export const getList = (options) => {
    return request("/jiwei/sysMsg/querySysMsgtListByPage", {
        method: 'POST',
        ...options
    })
}

//获取待办事项
export const getDaibanList = (options) => {
    return requestWithToken("/jiwei/systemParam/todoList", {
        method: 'POST',
        ...options
    })
}



















