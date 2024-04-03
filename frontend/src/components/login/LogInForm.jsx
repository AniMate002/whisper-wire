import SwapAuth from "../reusable/SwapAuth";



const LogInForm = () => {
    return (
        <form className="px-4 py-10 w-[450px]">
            <h2 className="flex items-center gap-2 text-4xl font-bold text-center justify-center">
                <span>Login</span>
                <span className="text-green-500">WhisperWire</span>
            </h2>
            <label className="w-full">
                <div className=" my-4 text-center">Username</div>
                <input type="text" placeholder="john_doe" className="input max-w-xs w-[100%] block mx-auto" />
            </label>
            <label className="w-full">
                <div className=" my-4 text-center">Password</div>
                <input type="password" placeholder="Password" className="input max-w-xs w-[100%] block mx-auto" />
            </label>
            <SwapAuth haveAccount={false} link={"/signup"}/>
            <button type="submit" className="btn btn-success w-full block mt-4 max-w-[20rem] mx-auto">Login</button>
        </form>
    );
}
 
export default LogInForm;