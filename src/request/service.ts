import axios, {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import commonStorage from "@/util/commonStorage";
import { Notify } from 'vant'
 let {VITE_APP_TITLE} = import.meta.env
console.log(VITE_APP_TITLE)
const service = axios.create({
    baseURL:  VITE_APP_TITLE === 'development'? '/api':'http://10.10.0.123:8055/api' ,
    timeout: 20000,
    headers: {  'Content-Type': 'application/json'}
});
// 请求拦截
service.interceptors.request.use((config:AxiosRequestConfig) => {
    // 添加token
    if(commonStorage.get('token')){
        (config.headers as AxiosRequestHeaders).Authorization= 'Bearer'+' '+ commonStorage.get('token') as string
    }else {
        // 返回登入页 + 报错
        Notify('没有携带token')
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(
    response => {
        console.log(response,'222')
        return response
    },
    error => {
        // console.log(error,'222')
        if(error.response.status === 401){
            Notify({type:'warning',message:'请先登录'})
            location.href = '/Login'
            return
        }
        return Promise.reject(error)
    })

export default  service
