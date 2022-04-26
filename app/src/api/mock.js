import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
let requests=axios.create({
    baseURL:'/mock',
    timeout:5000,
})
requests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
})
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done();
    return res.data
},(error)=>{
    return Promise.reject(new Error(error))
})


export default requests;