import {
    instance, 
    now,
} from "./axios"

export const find=async (id=1)=> {
    instance.get('article?id='+id)
    return {
        ok:true,
        data:"hello",
        msg:"ok"
    }
}

export const add=async (c={})=> {
    instance.post("article",c)
    return {
        ok:true,
        data:{id:now()},
        msg:"ok"
    }
}

export const list=async ()=>{
    instance.get('article/'+id)
    return {
        ok:true,
        data:[
              {id:1,title:"1",content:"cccc"},
              {id:2,title:"2",content:"cccc"},
              {id:3,title:"3",content:"cccc"},
              {id:4,title:"4",content:"cccc"},
        ],
        msg:"ok"
    }
}

export const del=async (id=0)=>{
    instance.delete('article/'+id)
    return {
        ok:true,
        data:{id},
        msg:"ok"
    }
}

export default {
    find,
    add,
    list,
    del,
}

