import GlassContainer from "../components/reusable/GlassContainer";
import SignUpForm from "../components/signup/SignUpForm";
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";




const SignUpPage = () => {
    const {authUser} = useAuthContext()
    if(authUser){
        return <Navigate to={'/'}/>
    }
    return (
        <div className="bgForest w-screen h-screen flex items-center justify-center">
            <GlassContainer className={"rounded-2xl"}>
                <SignUpForm />
            </GlassContainer>
            <div><Toaster/></div>
        </div>
    );
}
 
export default SignUpPage;