import useConversation from "../../../zustand/useConversation";



const ChatHeader = () => {
    const { selectedConversation } = useConversation()
    return (
        <div className="w-full bg-base-300 py-4 px-6 rounded-xl flex gap-2 items-center">
            <span className="text-sm">To:</span>
            <h4 className="font-semibold text-success">{selectedConversation?.username}</h4>
        </div>
    );
}
 
export default ChatHeader;