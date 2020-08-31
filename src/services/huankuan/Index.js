/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'


//获取报表数据
export const getReporter = (options) => {
    return requestWithToken("/jiwei/busiDuebill/queryCusApply", {
        method: 'POST',
        ...options
    })
}

//获取报表数据详
export const getReporterDetail = (options) => {
    return requestWithToken("/jiwei/busiDuebill/queryApplyDetail", {
        method: 'POST',
        ...options
    })
}




//获取融资申请前置数据
export const getPre = (options) => {
    return requestWithToken("/jiwei/busiDuebill/queryDuebillsByCusId", {
        method: 'POST',
        ...options

    })
}

//获取列表数据
export const getList = (options) => {
    return requestWithToken("/jiwei/busiRepay/queryRepaysByCusId", {
        method: 'POST',
        ...options
    })
}


//新建融资申请
export const addItem = (options) => {
    return requestWithToken("/jiwei/busiRepay/cusRepay", {
        method: 'POST',
        ...options
    })
}

//根据借据列表获取还款计划
export const getListBy = (duebilleNo, options) => {
    return requestWithToken(`/jiwei/busiDuebill/queryRepayPlan/${duebilleNo}`, {
        method: 'GET',
        ...options
    })
}



//根据借据列表获取还款计划
export const getTotal = (options) => {
    return requestWithToken(`/jiwei/busiDuebill/queryCusLoanAmt`, {
        method: 'POST',
        ...options
    })
}








