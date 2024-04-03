import SideBarSingleConversation from "./SideBarSingleConversation";




const SideBarConversations = () => {
    return (
        <div className="overflow-y-auto max-h-[70vh]">
            <SideBarSingleConversation />
            <SideBarSingleConversation />
        </div>
    );
}
 
export default SideBarConversations;