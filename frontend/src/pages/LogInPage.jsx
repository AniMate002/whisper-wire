import LogInForm from "../components/login/LogInForm";
import GlassContainer from "../components/reusable/GlassContainer";



const LogInPage = () => {
    return (
        <div className="bgForest w-screen h-screen flex items-center justify-center">
            <GlassContainer className={"rounded-2xl"}>
                <LogInForm />
            </GlassContainer>
        </div>
    );
}
 
export default LogInPage;