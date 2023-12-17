import React, { useState } from 'react';
import Messages from '@/components/Messages';

const ChatBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    return (

<section>

<div className="flex w-screen h-screen items-center justify-center bg-teal-500">
    <div className="flex flex-col gap-2 justify-center h-96 w-96">
        <div className="flex w-full h-1/2 flex-2 justify-center items-center gap-2">
            <button
            className="font-semibold flex justify-center items-center bg-white border-2 border-gray-300 shadow-lg rounded-lg w-1/2 h-full p-4"
            onClick={() => {/* Handle click event for 'Create' */}}
            >
                Test
            </button>
            <button
            className="font-semibold items-center flex justify-center bg-white border-2 border-gray-300 shadow-lg rounded-lg w-1/2 h-full p-4"
            onClick={() => {/* Handle click event for 'New' */}}
            >
                New
            </button>
        </div>

        <div
        className={`w-full flex flex-col border-2 shadow-lg rounded-lg border-gray-300 bg-white justify-end transition-all duration-300 ease-in-out ${
            isExpanded ? 'h-full' : 'h-12'
        }`}
        onFocus={() => {
            setShowMessages(true)
            setIsExpanded(true)}}
        onBlur={() => {
            setShowMessages(false)
            setIsExpanded(false)}}
        >
            <Messages isShow={showMessages}/>
                <input
                    type="text"
                    className="h-12 bg-white rounded-lg px-5 text-sm focus:outline-none"
                    placeholder="Ask me anything..."
                />
        </div>
    </div>
</div>

</section>
    );
};

export default ChatBox;
