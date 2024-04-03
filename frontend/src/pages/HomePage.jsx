import Chat from "../components/home/chat/Chat";
import SideBar from "../components/home/sidebar/SideBar";
import GlassContainer from "../components/reusable/GlassContainer";



const HomePage = () => {
    return (
        <div className="bgForest w-screen h-screen flex items-center justify-center">
            <GlassContainer className={"flex items-center justify-center rounded-xl px-4 py-6 overflow-hidden h-[75vh]"}>
                <SideBar />
                <div className="divider divider-horizontal" />
                <Chat />
            </GlassContainer>
        </div>
    );
}
 
export default HomePage;