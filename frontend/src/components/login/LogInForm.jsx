import { useState } from "react";
import SwapAuth from "../reusable/SwapAuth";
import { useLogin } from "../../hooks/useLogin";



const LogInForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {isLoading, login} = useLogin()
    async function handleSubmit(e){
        e.preventDefault()
        await login({username, password})
    } 
    return (
        <form onSubmit={handleSubmit} className="px-4 py-10 w-[450px]">
            <h2 className="flex items-center gap-2 text-4xl font-bold text-center justify-center">
                <span>Login</span>
                <span className="text-green-500">WhisperWire</span>
            </h2>
            <label className="w-full">
                <div className=" my-4 text-center">Username</div>
                <input type="text" placeholder="john_doe" className="input max-w-xs w-[100%] block mx-auto" 
                value={username} onChange={e => setUsername(e.target.value)}
                />
            </label>
            <label className="w-full">
                <div className=" my-4 text-center">Password</div>
                <input type="password" placeholder="Password" className="input max-w-xs w-[100%] block mx-auto" 
                value={password} onChange={e => setPassword(e.target.value)}
                />
            </label>
            <SwapAuth haveAccount={false} link={"/signup"}/>
            <button disabled={isLoading} type="submit" className="btn btn-success w-full block mt-4 max-w-[20rem] mx-auto">
                {
                    isLoading ? 
                    <span className="loading loading-ring loading-lg text-slate-400"></span>
                    :
                    "Login"
                }
            </button>
        </form>
    );
}
 
export default LogInForm;