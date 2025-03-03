import { useEffect, useState } from "react"
import { PostType } from "../../shared/types"
import { MainPageHeader } from "./ui/mainpageHeader"
import { Post } from "./ui/post"
import { getPosts } from "./api/getPosts"
import useUserStore from "../../shared/stores/user"

const MainPage: React.FC = () => {
    let now = new Date()
    let after = new Date()
    after.setDate(now.getDate()+290)
    const [posts, setPosts] = useState<PostType[]>([])
    const [cnt, setCnt] = useState<Number|null>(null)
    const userController = useUserStore()
    useEffect(()=>{
        
        const setupPost = async () => {
            const res = await getPosts()
            if(res){
                setPosts(res)
                setCnt(1) /// 내가 안한거 찾아야함..
            }
            else{
                setCnt(null)
                userController.setId('')
                userController.setName('')
                userController.setRole(0)
            }
        }
        setupPost()
    },[])
    
    return(
        <div className="flex flex-col w-full h-full bg-slate-100">
            <MainPageHeader cnt={cnt}/>
            {posts.length>0 ? (
            <div className="w-full flex-1 basis-[0px] flex flex-wrap gap-x-[13px] gap-y-6">
                {posts.map((data)=><Post data={data}/>)}
            </div>):(
            <div className="w-full flex-1 basis-[0px] bg-white flex rounded-md">
                <div className="m-auto text-2xl font-bold text-gray-500 w-fit h-fit">로그인이 필요한 서비스입니다.</div>
            </div>)
            }
        </div>
    )
}
export {MainPage}