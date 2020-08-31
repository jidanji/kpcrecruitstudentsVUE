/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'



//获取产品的列表
export const getList = (options) => {
    return requestWithToken("/fileupload/productinfo/queryProductListByPage", {
        method: 'POST',
        ...options
    })
}