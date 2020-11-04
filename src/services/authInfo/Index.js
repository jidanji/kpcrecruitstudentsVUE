/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'



//获取企业认证信息列表
export const getItems = (relationId, options) => {
    return requestWithToken(`/fileupload//attachment/getList/${relationId}`, {
        method: 'GET',
        ...options
    })
}