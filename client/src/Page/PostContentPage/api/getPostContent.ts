import axios from 'axios'
const getPostContent = async (id: string) => {
    try{
        const res = await axios('/api/post/getPostContent',{params:{id:id as string}})
        return res.data[0]
    }
    catch{
        return ''
    }
}
export {getPostContent}