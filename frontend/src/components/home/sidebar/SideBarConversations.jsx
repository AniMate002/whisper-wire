import { useGetConversations } from "../../../hooks/useGetConversations";
import SideBarSingleConversation from "./SideBarSingleConversation";




const SideBarConversations = () => {
    const  { loading, conversations } = useGetConversations()
    console.log(conversations)
    return (
        <div className={`overflow-y-auto h-[52vh] relative flex flex-col justify-center ${loading ? "items-center" : ""}`}>
            {
                loading ? 
                <span className="loading loading-ring loading-lg "></span>
                :
                conversations.map(conv => <SideBarSingleConversation conversation={conv} key={conv._id}/>)
            }
            {/* <SideBarSingleConversation />
            <SideBarSingleConversation /> */}
        </div>
    );
}
 
export default SideBarConversations;