import { Link } from "react-router-dom"


const SwapAuth = ({haveAccount, link}) => {
    return (
        <div className="flex gap-2 text-center justify-center mt-4">
            <span>{haveAccount ? "Already" : "Don't"} have an account?</span>
            <Link className="text-green-500 underline" to={link}>{haveAccount ? "Login" : "Sign up"}</Link>
        </div>
    );
}
 
export default SwapAuth;