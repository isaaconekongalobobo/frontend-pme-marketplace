import { createContext } from "react"

interface UserType {
    name: string,
    email: string,
    avatar: string,
    password: string,
    role: number,
    idPme: number
}

const UserInscriptionContext = createContext<UserType | null> (null)

export default UserInscriptionContext