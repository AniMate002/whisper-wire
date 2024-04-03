import ChatMyMessage from "./ChatMyMessage";
import ChatNotMyMessage from "./ChatNotMyMessage";



const ChatMessages = () => {
    return (
        <div className="overflow-y-auto pr-4 py-10">
            <ChatNotMyMessage />
            <ChatMyMessage />
        </div>
    );
}
 
export default ChatMessages;