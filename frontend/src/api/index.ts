import {
  instance, 
} from "./axios"



const get_article=(id=1)=> instance.get('article/'+id)
const add_article=(c={})=> instance.post("article",c)

export {
    get_article,
    add_article,
}

