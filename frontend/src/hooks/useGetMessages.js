import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import axios from "axios"

export const useGetMessages = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation()

    useEffect(() => {
        const getmessages = async () => {
            setIsLoading(true)
            try{
                const res = await axios.get(`/api/messages/${selectedConversation._id}`)
                const data = res.data
                if(data.error) throw new Error(data.error)
                setMessages(data)
            }catch(e){
                toast.error(e.message)
            }finally{
                setIsLoading(false)
            }
        }
        if(selectedConversation?._id) getmessages()
    }, [selectedConversation?._id, setMessages])

    return {isLoading, messages}
}