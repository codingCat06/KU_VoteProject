import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getPostContent } from "./api/getPostContent"
import { PostType } from "../../shared/types"

const PostContent: React.FC = () => {
    const param = useParams()
    const id = param.id
    const [post, setPost] = useState<PostType>()
    useEffect(()=>{
        const setup = async () =>{
            const res = await getPostContent(id as string)
            setPost(res)
        }
        if(id) setup()
    },[id])
    console.log(post)
    return(
        <div>
            <div dangerouslySetInnerHTML={ {__html: post?.content as string} }/>
        </div>
    )
}
export {PostContent}