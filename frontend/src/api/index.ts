import axios from 'axios';

const get_article=()=>axios.get('/article/1')
const add_article=(c="")=> axios.post("article",c)

export {
    get_article,
    add_article,
}

