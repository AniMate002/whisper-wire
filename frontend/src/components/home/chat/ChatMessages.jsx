import { useEffect, useRef } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import ChatEmpty from "./ChatEmpty";
import ChatLoading from "./ChatLoading";
import ChatMessage from "./ChatMessage";




const ChatMessages = ({messages, isLoading}) => {
    const lastMessage = useRef(null)

    const {authUser} = useAuthContext()
    
    useEffect(() => {
        setTimeout(() => {
            lastMessage?.current?.scrollIntoView({behavior: "smooth"})
        }, 100)
    }, [messages])

    if(isLoading){
        return <ChatLoading />
    }

    if(messages?.length === 0){
        return <ChatEmpty />
    }
    const renderedMessages = messages?.map(message => (
        <div key={message._id} ref={lastMessage}>
            <ChatMessage message={message}/>
        </div>
    ))
    return (
        <div className="overflow-y-auto pr-4 py-10">
            {renderedMessages}
        </div>
    );
}
 
export default ChatMessages;