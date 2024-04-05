import { useState } from "react";
import Chat from "../components/home/chat/Chat";
import SideBar from "../components/home/sidebar/SideBar";
import GlassContainer from "../components/reusable/GlassContainer";
import ChatNotSelected from "../components/home/chat/ChatNotSelected";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import useConversation from "../zustand/useConversation";




const HomePage = () => {
    // const [selectedChat, setSelectedChat] = useState(null)
    const { selectedConversation } = useConversation()
    const {authUser} = useAuthContext()
    if(!authUser){
        return <Navigate to={"/login"}/>
    }
    return (
        <div className="bgForest w-screen h-screen flex items-center justify-center">
            <GlassContainer className={"flex items-center justify-center rounded-xl px-4 py-6 overflow-hidden h-[75vh]"}>
                <SideBar />
                <div className="divider divider-horizontal" />
                {selectedConversation ? 
                <Chat />
                :
                <ChatNotSelected />
                }
            </GlassContainer>
            <div><Toaster/></div>
        </div>
    );
}
 
export default HomePage;