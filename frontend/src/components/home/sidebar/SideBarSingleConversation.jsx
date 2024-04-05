import useConversation from "../../../zustand/useConversation";



const SideBarSingleConversation = ({conversation}) => {
    const { setSelectedConversation, selectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <div>
            <div className={`flex items-center justify-between w-[95%] mx-auto px-5 py-2 cursor-pointer rounded-md
            active:bg-gray-900 active:rounded-md active:bg-clip-padding active:backdrop-filter active:backdrop-blur-sm active:bg-opacity-20
            ${isSelected 
                ? 
                "bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30" 
                : 
                "hover:bg-gray-100 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 transition-all"}   
            `}
            onClick={() => setSelectedConversation(conversation)} 
            >
                <div className="flex items-center gap-4 font-semibold text-slate-300">
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src={conversation.profilePic} />
                        </div>
                    </div>
                    <h3>
                        {conversation.fullName}
                    </h3>
                </div>
                {/* <div className="chat chat-end ">
                    <div className="chat-bubble text-ellipsis overflow-hidden max-w-[120px] max-h-[100px] whitespace-nowrap">{conversation.username}</div>
                </div> */}
                <div className="text-sm">
                    @{conversation.username}
                </div>
            </div>
            <div className="divider w-[90%] mx-auto my-0" />
        </div>
    );
}
 
export default SideBarSingleConversation;