import { PiChatsTeardrop } from "react-icons/pi";



const ChatEmpty = () => {
    return (
        <div className="flex h-full w-full items-center justify-center flex-col text-2xl gap-2">
            <div>Send a message</div>
            <div className="text-xl">to start a conversation</div>
            <PiChatsTeardrop className="text-5xl"/>
        </div>
    );
}
 
export default ChatEmpty;