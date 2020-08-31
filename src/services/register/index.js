/* eslint-disable */
import {
    request,
    requestWithToken,
} from '@/utils/ssoManagerRequest'


//注册用户
export const register = (options) => {
    return request("/ssomanager/api/user/register", {
        method: 'POST',
        ...options

    })
}

//注册用户必须带验证码
export const registerWidthCode = (options) => {
    return request("/ssomanager/api/user/code/register", {
        method: 'POST',
        ...options

    })
}

//重置密码
export const resetPWD = (options) => {
    return request("/ssomanager/api/user/phone/password", {
        method: 'POST',
        ...options

    })
}


//用户登录
export const login = (options) => {
    return request("/ssomanager/iApi/loginWithPassword", {
        method: 'POST',
        ...options
    })
}


//用户登录
export const loginNew = (options) => {
    return request("/ssomanager/iApi/loginWithPasswordAndCode", {
        method: 'POST',
        ...options
    })
}

//获取短信验证码
export const getSMS = (phone,purpose, options) => {
    return request(`/ssomanager/code/sms/${phone}?purpose=${purpose}`, {
        method: 'GET',
        ...options
    })
}



//获取用户信息
export const getUserinfo = (options) => {
    return requestWithToken("/xuesong/cuscusAction/detail", {
        method: 'GET',
        ...options
    }
    )
}
//上传文件
export const fileUpload = (options) => {
    return requestWithToken("/fileupload/attachment/upload", {
        method: 'POST',
        ...options
    }
    )
}

//上传企业信息
export const submitCorp = (options) => {
    return requestWithToken("xuesong/authentication/submit", {
        method: 'POST',
        ...options
    }
    )
}

//上传个人信息
export const submitPerson = (options) => {
    return requestWithToken("xuesong/authentication/person/submit", {
        method: 'POST',
        ...options
    }
    )
}



//获取企业信息
export const getCompanyInfo = (options) => {
    return requestWithToken("xuesong/authentication/company", {
        method: 'GET',
        ...options
    }
    )
}


export const getPersonInfo = (options) => {
    return requestWithToken("xuesong/cuscusAction/detail", {
        method: 'GET',
        ...options
    }
    )
}









