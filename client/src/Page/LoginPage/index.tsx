import { ChangeEvent, useContext, useState } from 'react'
import kuIcon from '../../shared/assets/kuIcon.png'
import axios from 'axios'
import useUserStore from '../../shared/stores/user'
import { useNavigate } from 'react-router'
const LoginPage: React.FC = () => {
    const [studentNumber, setStudentNumber] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const userController = useUserStore()
    const navigate = useNavigate()
    const Login = async () => {
        try{
            const res = await axios.post('http://localhost:3000/api/user/login', {
                student_number: studentNumber,
                password: password
            })
            userController.setName(res.data.name)
            userController.setRole(res.data.role)
            userController.setId(res.data.id)
            navigate(-1)
        }
        catch(err){
            console.log('fail to login', err)
        }
    }
    return(
        <div className='flex flex-col items-center p-6 mx-auto bg-white rounded-md w-fit '>
            <img src={kuIcon} className='w-[200px] h-[200px] mb-8 mt-4'/>
            <div className='w-[280px]'>
                <div className='relative w-full mb-2 group'>
                    <label htmlFor='student_number' className='absolute top-2 left-3 text-[11px] group-focus-within:text-blue-600'>학번</label>
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setStudentNumber(e.target.value)} id='student_number' type='string' className='w-full px-3 pt-4 pb-0.5 h-14 focus:outline-2 focus:outline-blue-400 rounded-md text-[14px] bg-gray-100' placeholder='학번을 입력해주세요'/>
                </div>
                <div className='relative w-full group'>
                    <label htmlFor='password' className='absolute top-2 left-3 text-[11px] group-focus-within:text-blue-600'>비밀번호</label>
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} id='password' type='password' className='w-full px-3 pt-4 pb-0.5 h-14 focus:outline-2 focus:outline-blue-400 rounded-md text-[14px] bg-gray-100' placeholder='비밀번호를 입력해주세요'/>
                </div>
                <button onClick={Login} className='w-full p-3 text-white bg-blue-500 rounded-md text-[16px] mt-10 font-bold' >로그인</button>
            </div>


        </div>
    )   
}

export {LoginPage}