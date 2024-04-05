import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios"
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {authUser, setAuthUser} = useAuthContext()

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        setIsLoading(true)
        const success = handleSubmitError({fullName, username, password, confirmPassword, gender})
        if(!success) return;

        try{
            const res = await axios.post("/api/auth/signup", {fullName, username, password, confirmPassword, gender})
            const data = res.data
            // console.log(data)
            if(data.error){
                throw new Error(data.error)
            }

            // set user in local storage
            localStorage.setItem("whisper-wire-user", JSON.stringify(data))
            // set user in auth-context
            setAuthUser(data)
            
            return data
        }catch(e){
            toast.error("Error: " + e.message)
        }finally{
            setIsLoading(false)
        }
    }

    return {isLoading, signup}
}
 
export default useSignUp;

function handleSubmitError({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please, fill in all fields.")
        return false
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match.")
        return false
    }
    if(password.length < 6){
        toast.error("Password should be at least 6 characters.")
        return false
    }
    return true
}