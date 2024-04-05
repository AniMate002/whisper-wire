import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useGetConversations } from "../../../hooks/useGetConversations";
import toast from "react-hot-toast"
import useConversation from "../../../zustand/useConversation";

const SideBarSearch = () => {
    const [search, setSearch] = useState("")
    const { loading, conversations } = useGetConversations()
    const { setSelectedConversation } = useConversation()
    function submitHandler(e){
        e.preventDefault()
        if(search.length === 0) return
        if(search.length < 2) return toast.error("Search length must be at least 3 characters.")
        if(search.length >= 3){
            const foundConversation = conversations.find(conv => conv.fullName.toLowerCase().includes(search.toLowerCase()) || conv.username.toLowerCase().includes(search.toLowerCase()))
            if(foundConversation){
                setSelectedConversation(foundConversation)
                setSearch("")
            }else{
                return toast.error("User was not found.")
            }
        }
    }
    return (
        <form onSubmit={submitHandler} className="flex items-center justify-between">
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search..." className="input w-full max-w-xs rounded-full" />
            <button type="submit" className="btn btn-circle btn-success text-slate-800">
                <BiSearch className="text-xl"/>
            </button>
        </form>
    );
}
 
export default SideBarSearch;