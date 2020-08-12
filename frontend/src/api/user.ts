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

export const del=async (id=1)=> {
    instance.delete("user?id=",id)
    return {
        ok:true,
        data:{},
        msg:"ok"
    }
}

export default {
    list,
    del,

}



