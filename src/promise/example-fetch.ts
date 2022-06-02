import {Axios,AxiosRequestConfig} from 'axios'
const endpoint = "https://jsonplaceholder.typicode.com/users"

const config = {
    method:'get'  
}

const axios= require('axios').default.create(config);






axios.get(endpoint)
    .then((resp)=>{ 
    if(resp.status ===200)
    {  
    return JSON.parse(resp.data)
    }
}).then((arrObjs) => {
    arrObjs.forEach(entry => {
    
        if(entry.id >2 )
        {
        console.log(entry.id, entry.name);
        }
    });
}).catch(ex => {console.log(ex);throw Error("abb");
})