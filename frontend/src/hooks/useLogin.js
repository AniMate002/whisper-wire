import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuthContext } from "../context/AuthContext"



export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {authUser, setAuthUser} = useAuthContext()

    const login = async ({username, password}) => {
        setIsLoading(true)
        const success = handleSubmitError({username, password})
        if(!success) return
        try {
            const res = await axios.post("/api/auth/login", {username, password})
            const data = res.data
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("whisper-wire-user", JSON.stringify(data))
            setAuthUser(data)
            return data
        } catch (e) {
            toast.error(e.message)
        }finally{
            setIsLoading(false)
        }
    }

    return {isLoading, login}
}


function handleSubmitError({username, password}){
    if(!username || !password){
        toast.error("Please, fill in all fields.")
        return false
    }
    if(password.length < 6){
        toast.error("Invalid password")
        return false
    }

    return true
}