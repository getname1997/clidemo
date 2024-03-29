import { Notify } from 'vant'
import service from "@/request/service";
import type { AxiosRequestConfig, AxiosResponse} from 'axios';  // 引入axios的一些类型定义
import {RequestOptions,Result} from '@/request/type'
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T
const request:<T=any>(config: AxiosRequestConfig , options?: RequestOptions)=> Promise<T> =(config: AxiosRequestConfig)=>{
     let params:AxiosRequestConfig ={
         method:'post',
         ...config
     }
     /*不校验返回值*/
    return new Promise<any>((resolve, reject) => {
        service(params).then((res: AxiosResponse<Result>)=>{
            resolve(res.data);
        }).catch((err)=>{
            // Notify('出错了')
            reject(err)
        })
    })
}


export default request
