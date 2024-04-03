



const GlassContainer = ({children, className}) => {
    return (
        <div className={" bg-green-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 " + className}>
            { children }
        </div>
    );
}
 
export default GlassContainer;