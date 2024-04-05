import { TiMessages } from "react-icons/ti";


const ChatNotSelected = () => {
    return (
        <div className="w-[600px] flex h-full items-center justify-center text-xl flex-col gap-4 font-semibold">
            <div className="flex gap-2">
                <span>Welcome</span>
                <span className="text-slate-300 underline">Kiryl Shauchenka</span>
            </div>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-7xl"/>
        </div>
    );
}
 
export default ChatNotSelected;