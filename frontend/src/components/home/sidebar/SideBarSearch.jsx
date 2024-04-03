import { BiSearch } from "react-icons/bi";

const SideBarSearch = () => {
    return (
        <form className="flex items-center justify-between">
            <input type="text" placeholder="Search..." className="input w-full max-w-xs rounded-full" />
            <button type="submit" className="btn btn-circle btn-success text-slate-800">
                <BiSearch className="text-xl"/>
            </button>
        </form>
    );
}
 
export default SideBarSearch;