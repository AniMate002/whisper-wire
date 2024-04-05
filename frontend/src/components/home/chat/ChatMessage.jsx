import { useAuthContext } from "../../../context/AuthContext";
import { formatDate } from "../../../utils/formatDate";
import useConversation from "../../../zustand/useConversation";



const ChatMessage = ({message}) => {
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const isMe = message.senderId === authUser._id
    const avatar = isMe ? authUser.profilePic : selectedConversation.profilePic
    const formattedTime = formatDate(message.createdAt)
    return (
        <div className={`chat ${isMe ? "chat-end" : "chat-start"}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="avatar" src={avatar}/>
                </div>
            </div>
            <div className={`chat-bubble ${isMe ? "bg-success text-slate-300" : ""} `}>{message.message}</div>
            <div className="chat-footer opacity-50">
                {formattedTime}
            </div>
        </div>
    );
}
 
export default ChatMessage;