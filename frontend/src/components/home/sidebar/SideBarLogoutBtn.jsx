import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../../hooks/useLogout";



const SideBarLogoutBtn = () => {
    const {isLoading, logout} = useLogout()
    async function logoutHandler(){
        await logout()
    }
    return (
        <button disabled={isLoading} onClick={logoutHandler} className="text-2xl ml-5 w-fit hover:text-slate-800">
            {
                isLoading ? 
                <span className="loading loading-ring loading-xs"></span>
                :
                <BiLogOut />
            }
        </button>
    );
}
 
export default SideBarLogoutBtn;