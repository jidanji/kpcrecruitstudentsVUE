/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'




//获取开票信息
export const getList = (options) => {
    return requestWithToken("/jiwei/invoiceInfo/queryInvoiceInfoListByPage", {
        method: 'POST',
        ...options

    })
}


//新建开票信息
export const addItem = (options) => {
    return requestWithToken("/jiwei/invoiceInfo/saveOrUpdate", {
        method: 'POST',
        ...options
    })
}

//修改开票信息
export const updateItem = (options) => {
    return requestWithToken("/jiwei/invoiceInfo/saveOrUpdate", {
        method: 'POST',
        ...options
    })
}



//删除用户融资申请

export const deleteItem = (ids,options) => {
    return requestWithToken(`/jiwei//invoiceInfo/deleteByIds/${ids}`, {
        method: 'GET',...options
    })
}








