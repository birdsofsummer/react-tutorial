import axios from 'axios';

import {
    message,
} from "antd"


//https://httpbin.org/get
//https://httpbin.org/post

const instance = axios.create({
      baseURL: '/api/',
      timeout: 1000,
      //headers: {’X-Custom-Header’: ’foobar’}
});


instance.interceptors.response.use(result => result.data);
instance.defaults.timeout = 10000
instance.defaults.headers['Content-Type'] = 'appliction/json'; // x-www-form-urlencoded
instance.defaults.transformRequest = (d={}) =>JSON.stringify(d)
instance.defaults.validateStatus = function validateStatus(status) {
      return /^(2|3)\d{2}$/.test(status);
};
instance.interceptors.request.use(    
    config => {        
        const token =localStorage.token  ?? "123456" //store.state.token;        
        config.headers.token = token 
        return config;    
    },err=>{
        console.log(err)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(    
    response => {        
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },
    error => {        
        if (error.response.status) {            
            switch (error.response.status) {                
                case 401:                    
                    message.error("relogin")
                    // router.replace({                        
                    //        path: '/login',                        
                    //        query: { redirect: router.currentRoute.fullPath } 
                    //    });
                    break;
                case 403:                     
                    localStorage.clear();                    
                    message.error("403")
                    //store.commit('loginfail', null);                    
                    // setTimeout(() => {                        
                    //     router.replace({                            
                    //         path: '/login',                            
                    //         query: { redirect: router.currentRoute.fullPath }                        
                    //     });                    
                    // }, 1000);                    
                    break; 
                case 404:                    
                    message.error("404")
                break;                
                    message.error(error.response.status)
            }            
            return Promise.reject(error.response);        
        }       
    }
);



export {
  axios,
  instance, 
}
