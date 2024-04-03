import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";




const Chat = () => {
    return (
        <div className="w-[600px] flex flex-col justify-between h-full">
            <ChatHeader />
            <ChatMessages />
            <ChatInput />
        </div>
    );
}
 
export default Chat;