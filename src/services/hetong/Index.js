/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'

//获取试算接口
export const getPrePay = (options) => {
    return requestWithToken("/jiwei/busiDuebill/calcRpl", {
        method: 'POST',
        ...options
    })
}


//获取用户所有的合同
export const getList = (options) => {
    return requestWithToken("/jiwei/busiContractIndivAction/findContByCusNo", {
        method: 'POST',
        ...options
    })
}

//用户签署合同

export const assignContract = (options) => {
    return requestWithToken("/jiwei/busiContractIndivAction/contractSign", {
        method: 'POST',
        ...options
    })
}

//获取合同列表
export const getAssignItems = (item, options) => {

    var custId = eval('(' + sessionStorage.getItem("UserInfo") + ")").custId;

    return requestWithToken(`/fileupload/contract/querySubContract?contractNo=${item}&custId=${custId}`, {
        method: 'GET',
        ...options
    })
}



