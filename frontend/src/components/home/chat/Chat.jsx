import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { useGetMessages } from "../../../hooks/useGetMessages";
import useConversation from "../../../zustand/useConversation";
import { useEffect } from "react";
import { useListenMessages } from "../../../hooks/useListenMessages";




const Chat = () => {
    useListenMessages()
    const { messages, isLoading } = useGetMessages()
    const {setSelectedConversation} = useConversation()
    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])
    return (
        <div className="w-[600px] flex flex-col justify-between h-full">
            <ChatHeader />
            <ChatMessages messages={messages} isLoading={isLoading}/>
            <ChatInput />
        </div>
    );
}
 
export default Chat;