import { useState } from "react";
import SwapAuth from "../reusable/SwapAuth";
import SignUpRadios from "./SignUpRadios";
import useSignUp from "../../hooks/useSignup";



const SignUpForm = () => {
    const {isLoading, signup} = useSignUp()
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    async function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        await signup(inputs)
    }
    return (
        <form className="px-4 py-10 w-[450px]" onSubmit={e => handleSubmit(e)}>
            <h2 className="flex items-center gap-2 text-4xl font-bold text-center justify-center">
                <span>Sign Up</span>
                <span className="text-green-500">WhisperWire</span>
            </h2>
            <label className="w-full">
                <div className=" my-4 text-center">Full Name</div>
                <input type="text" placeholder="John Doe" className="input max-w-xs w-[100%] block mx-auto"
                value={inputs.fullName} onChange={e => setInputs({...inputs, fullName: e.target.value})}
                />
            </label>
            <label className="w-full">
                <div className=" my-4 text-center">Username</div>
                <input type="text" placeholder="john_doe" className="input max-w-xs w-[100%] block mx-auto" 
                value={inputs.username} onChange={e => setInputs({...inputs, username: e.target.value})}
                />
            </label>
            <label className="w-full">
                <div className=" my-4 text-center">Password</div>
                <input type="password" placeholder="Password" className="input max-w-xs w-[100%] block mx-auto" 
                value={inputs.password} onChange={e => setInputs({...inputs, password: e.target.value})}
                />
            </label>
            <label className="w-full">
                <div className=" my-4 text-center">Confirm Password</div>
                <input type="password" placeholder="Confirm password" className="input max-w-xs w-[100%] block mx-auto" 
                value={inputs.confirmPassword} onChange={e => setInputs({...inputs, confirmPassword: e.target.value})}
                />
            </label>
            <SignUpRadios inputs={inputs} setInputs={setInputs}/>
            <SwapAuth haveAccount={true} link={"/login"}/>
            <button disabled={isLoading} type="submit" className="btn btn-success w-full block mt-4 max-w-[20rem] mx-auto">
                {
                    isLoading ? 
                    <span className="loading loading-ring loading-lg text-slate-400"></span>
                    :
                    "Sign Up"
                }
            </button>
        </form>
    );
}
 
export default SignUpForm;