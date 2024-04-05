import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import axios from "axios"

export const useSendMessage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    const sendmesage = async (message) => {
        setIsLoading(true)
        try {
            const res = await axios.post(`/api/messages/send/${selectedConversation._id}`, message)
            const data = res.data
            if(data.error) throw new Error(data.error)
            setMessages([...messages, data])
        } catch (e) {
            toast.error(e.message)
        }finally{
            setIsLoading(false)
        }
    }

    return {isLoading, sendmesage}
}