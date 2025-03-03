import { PostType } from "../../../shared/types";
import axios from 'axios'

const getPosts = async (): Promise<PostType[]|null> => {
    try{
        const res =  (await axios.post('/api/post/getPosts',{},{}))
        const data: PostType[] = res.data
        return data
    }
    catch{
        console.log('fail')
        return null
    }
}
export {getPosts}