import { Navigate } from "react-router-dom";
import LogInForm from "../components/login/LogInForm";
import GlassContainer from "../components/reusable/GlassContainer";
import { useAuthContext } from "../context/AuthContext";
import { Toaster } from "react-hot-toast"



const LogInPage = () => {
    const {authUser} = useAuthContext()
    if(authUser){
        return <Navigate to={'/'}/>
    }
    return (
        <div className="bgForest w-screen h-screen flex items-center justify-center">
            <GlassContainer className={"rounded-2xl"}>
                <LogInForm />
            </GlassContainer>
            <div><Toaster/></div>

        </div>
    );
}
 
export default LogInPage;