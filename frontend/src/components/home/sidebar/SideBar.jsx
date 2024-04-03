import SideBarConversations from "./SideBarConversations";
import SideBarLogoutBtn from "./SideBarLogoutBtn";
import SideBarSearch from "./SideBarSearch";



const SideBar = () => {
    return (
        <div className="flex flex-col w-[420px] gap-4 justify-between h-full">
            <div className="flex flex-col gap-4">
                <SideBarSearch />
                <div className="divider w-[80%] mx-auto my-0" />
                <SideBarConversations />
            </div>
            <SideBarLogoutBtn />
        </div>
    );
}
 
export default SideBar;