import { LuSend } from "react-icons/lu";
import { useSendMessage } from "../../../hooks/useSendMessage";
import { useState } from "react";


const ChatInput = () => {
    const [message, setMesasge] = useState("")
    const { isLoading, sendmesage } = useSendMessage()
    async function submitHandler(e){
        e.preventDefault()
        if(message)
            await sendmesage({message})
        setMesasge("")
    }
    return (
        <form onSubmit={e => submitHandler(e)} className="relative">
            <input value={message} onChange={e => setMesasge(e.target.value)} type="text" placeholder="Send a message" className="input input-bordered w-full rounded-full" />
            <button type="submit" className="absolute right-0 top-1/2 translate-y-[-50%] text-xl hover:text-success p-5 transition-all duration-150">
                {
                    isLoading ? 
                    <span className="loading loading-spinner loading-sm"></span>
                    :
                    <LuSend />
                }
            </button>
        </form>
    );
}
 
export default ChatInput;