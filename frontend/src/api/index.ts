import {
  instance, 
} from "./axios"



const get_article=()=>instance.get('/article/1')
const add_article=(c="")=> instance.post("article",c)

export {
    get_article,
    add_article,
}

