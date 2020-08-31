/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/RZRequest'



//获取所有的字典列表
export const getDictList = (options) => {
    return requestWithToken("/fileupload/selectOptionAction/findAllOptions", {
        method: 'POST',
        ...options

    })
}