import { LuSend } from "react-icons/lu";


const ChatInput = () => {
    return (
        <div className="relative">
            <input type="text" placeholder="Send a message" className="input input-bordered w-full rounded-full" />
            <button className="absolute right-0 top-1/2 translate-y-[-50%] text-xl hover:text-success p-5 transition-all duration-150">
                <LuSend />
            </button>
        </div>
    );
}
 
export default ChatInput;