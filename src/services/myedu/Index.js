/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'



//获取用户融资申请
export const getList = (options) => {
    return requestWithToken("/fileupload/credit/creditList", {
        method: 'POST',
        ...options
    })
}
 
