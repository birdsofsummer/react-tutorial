import {
    instance, 
    now,
} from "./axios"




export interface User {
    gender: string;
    name:   Name;
    email:  string;
    nat:    string;
}

export interface Name {
    title: string;
    first: string;
    last:  string;
}

/*
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Ibtissam",
        "last": "De Ree"
      },
      "email": "ibtissam.deree@example.com",
      "nat": "NL"
    },
  ]
}

*/


export const list=async (count = 3)=>{
    const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
    return instance.get(fakeDataUrl)
}


const default_user={
      name:{
        "title": "Mr",
        "first": "Sergio",
        "last": "Moreno",
      },
      user:{
          username:"ccc",
          password:"123456",
          gender: 0,
          age:99,
          website:"https://www.baidu.com",
          email:"abc@qq.com",
          introduction:"123",
      }
}


export const find=async (id=1)=> {
    instance.get("user?id=",id)
    return {
        ok:true,
        data:{id,...default_user},
        msg:"ok"
    }
}

export const del=async (id=1)=> {
    instance.delete("user?id=",id)
    return {
        ok:true,
        data:{},
        msg:"ok"
    }
}

export const add=async (d={})=> {
    instance.post("user",d)
    return {
        ok:true,
        data:{id:now()},
        msg:"ok"
    }
}



export default {
    list,
    del,
    add,
    find,
}



