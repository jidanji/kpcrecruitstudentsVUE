/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'



//获取融资申请前置数据
export const getPre = (options) => {
    return requestWithToken("/fileupload/credit/validCredit", {
        method: 'POST',
        ...options

    })
}


export const getList = (options) => {
    return requestWithToken("/fileupload/payout/applyList", {
        method: 'POST',
        ...options

    })
}

//新建融资申请
export const addItem = (options) => {
    return requestWithToken("/fileupload//payout/apply", {
        method: 'POST',
        ...options
    })
}



