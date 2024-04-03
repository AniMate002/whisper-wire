import SwapAuth from "../reusable/SwapAuth";
import SignUpRadios from "./SignUpRadios";



const SignUpForm = () => {
    return (
        <form className="px-4 py-10 w-[450px]">
            <h2 className="flex items-center gap-2 text-4xl font-bold text-center justify-center">
                <span>Sign Up</span>
                <span className="text-green-500">WhisperWire</span>
            </h2>
            <label className="w-full">
                <div className=" my-4 text-center">Full Name</div>
                <input type="text" placeholder="John Doe" className="input max-w-xs w-[100%] block mx-auto" />
            </label>
            <label className="w-full">
                <div className=" my-4 text-center">Username</div>
                <input type="text" placeholder="john_doe" className="input max-w-xs w-[100%] block mx-auto" />
            </label>
            <label className="w-full">
                <div className=" my-4 text-center">Password</div>
                <input type="password" placeholder="Password" className="input max-w-xs w-[100%] block mx-auto" />
            </label>
            <SignUpRadios />
            <SwapAuth haveAccount={true} link={"/login"}/>
            <button type="submit" className="btn btn-success w-full block mt-4 max-w-[20rem] mx-auto">Sign Up</button>
        </form>
    );
}
 
export default SignUpForm;