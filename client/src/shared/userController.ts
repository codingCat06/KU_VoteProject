import {Cookies} from 'react-cookie'
const cookies = new Cookies();

export interface User {
    name:string,
    role:number,
    id:string
}

const getUserInfo = () => {
    console.log('name',cookies.get('name'))
    return {name:cookies.get('name'), role:cookies.get('role'), id:cookies.get('id')}
}
export {getUserInfo}