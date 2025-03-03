import { Outlet, useNavigate } from "react-router"
import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon, ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import useUserStore from "../../shared/stores/user"
import { useEffect, useState } from "react"
import { User, getUserInfo } from "../../shared/userController"
import axios from 'axios'

const PageLayout: React.FC = () => {
    const userController = useUserStore()
    const navigate = useNavigate()
    const handleLogout = ()=>{
        axios.get('api/user/logout')
        userController.setId('')
        userController.setName('')
        userController.setRole(0)
        navigate(0)
    }
    useEffect(()=>{
        const userInfo = getUserInfo()
        userController.setId(userInfo.id)
        userController.setName(userInfo.name)
        userController.setRole(userInfo.role)
    },[])
    return(
        <div className="flex flex-col w-screen min-h-screen pb-4 bg-slate-100">
            <div className="flex flex-col flex-1 w-full h-full">
                <div className="w-full h-16 mb-8 bg-white">
                    <div className="w-[1200px] h-full mx-auto items-center flex justify-between">
                        <button onClick={()=>navigate('')} className="font-['Tenada'] text-2xl text-blue-400">Vote.gg</button>
                        {userController.name?
                            (<div className="flex gap-x-2">
                                <div>{userController.name}님</div>
                                <button onClick={handleLogout} className="flex">
                                    로그아웃
                                    <ArrowRightStartOnRectangleIcon className="w-6 h-6"/>
                                </button>
                            </div>)
                            :
                            (<div className="flex" onClick={()=>navigate('/login')}>
                                로그인
                                <ArrowLeftEndOnRectangleIcon className="w-6 h-6"/>
                            </div>)
                        }
                    </div>
                </div>

                <div className="flex-1 w-[1200px] basis-[0px] mx-auto"><Outlet/></div>
                
            </div>
        </div>
    )
}
export {PageLayout}