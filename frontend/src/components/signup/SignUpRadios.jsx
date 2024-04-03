


const SignUpRadios = () => {
    return (
        <div className="flex items-center justify-center gap-4 mt-4">
            <label className="flex items-center gap-2">
                <span>Male</span>
                <input type="radio" name="radio-5" className="radio radio-success" value={"male"}/>
            </label>
            <label className="flex items-center gap-2">
                <span>Female</span>
                <input type="radio" name="radio-5" className="radio radio-success" value={"female"} />
            </label>
        </div>
    );
}
 
export default SignUpRadios;