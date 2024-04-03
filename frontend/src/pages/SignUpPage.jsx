import GlassContainer from "../components/reusable/GlassContainer";
import SignUpForm from "../components/signup/SignUpForm";





const SignUpPage = () => {
    return (
        <div className="bgForest w-screen h-screen flex items-center justify-center">
            <GlassContainer className={"rounded-2xl"}>
                <SignUpForm />
            </GlassContainer>
        </div>
    );
}
 
export default SignUpPage;