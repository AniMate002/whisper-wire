import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"





export const useListenMessages = () => {
    const { messages, setMessages } = useConversation()
    const { socket } = useSocketContext()
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
}