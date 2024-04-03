


const SideBarSingleConversation = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-[90%] mx-auto cursor-pointer">
                <div className="flex items-center gap-4 font-semibold text-slate-300">
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <h3>
                        Alice Walking
                    </h3>
                </div>
                <div class="chat chat-end ">
                    <div class="chat-bubble text-ellipsis overflow-hidden max-w-[120px] max-h-[100px] whitespace-nowrap">You underestimate my power!You underestimate my power!You underestimate my power!You underestimate my power!You underestimate my power!</div>
                </div>
            </div>
            <div className="divider w-[90%] mx-auto my-0" />
        </div>
    );
}
 
export default SideBarSingleConversation;