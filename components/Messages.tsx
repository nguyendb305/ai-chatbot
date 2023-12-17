import { useEffect, useRef } from "react";

interface MessagesProps {
    isShow: boolean
}
const Messages = ({ isShow } : MessagesProps) => {


    

     
    return (
    <>
     {isShow && <div className="w-full border-b-2 border-slate-100 overflow-auto h-full flex flex-col ease-in-out transition-all duration-300">
    <div className="bg-slate-100 rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 32142342343244</div>
    <div className="bg-blue-500 text-white flex justify-end self-end rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 3214234234324234234</div>
    <div className="bg-slate-100 rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 32142342343244</div>
    <div className="bg-blue-500 text-white flex justify-end self-end rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 3214234234324234234</div>
    <div className="bg-slate-100 rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 32142342343244</div>
    <div className="bg-blue-500 text-white flex justify-end self-end rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 3214234234324234234</div>
    <div className="bg-slate-100 rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 32142342343244</div>
    <div className="bg-blue-500 text-white flex justify-end self-end rounded-xl m-2 py-2 px-3 w-3/4">hello hello hello hello hello hello hello hello 3214234234324234234</div>
    </div>}
    </>
   
    )
}

export default Messages