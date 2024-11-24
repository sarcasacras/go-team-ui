'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface MessageData {
    recipient: string;
    subject: string;
    message: string;
}

export default function MessagesForm({ buttonStyle, buttonDivStyle }: { buttonStyle?: string, buttonDivStyle?: string }) {
    const [messageData, setMessageData] = useState<MessageData>({
        recipient: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessageData({
            ...messageData,
            [e.target.name]: e.target.value
        });
    };

    const handleClear = () => {
        setMessageData({
            recipient: '',
            subject: '',
            message: ''
        });
    };

    const baseGreenStyles = 'bg-go-green font-bold text-gray-800 rounded-xl border-t-4 border-t-go-green-shadow hover:bg-[#aafcb3] transition duration-500 p-2 m-2';
    const baseCyanStyles = 'bg-go-cyan font-bold text-gray-800 rounded-xl border-t-4 border-t-go-cyan-shadow hover:bg-[#a6e2e9] transition duration-500 p-2 m-2';
    const combinedGreenStyles = `${baseGreenStyles} ${buttonStyle}`
    const combinedCyanStyles = `${baseCyanStyles} ${buttonStyle}`

    return (
        <div className="bg-white p-4 rounded-lg min-h-[250px] flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-black font-semibold text-xl">New Message</h2>
                <Image src='/more.png' alt='More options' height={32} width={32} />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="recipient"
                    className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none text-black text-lg"
                    placeholder="Recipient..."
                    value={messageData.recipient}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="subject"
                    className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none text-black text-lg"
                    placeholder="Subject..."
                    value={messageData.subject}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    className="w-full h-48 p-3 border-2 border-gray-300 rounded-lg resize-none focus:outline-none text-black text-lg"
                    placeholder="Type your message here..."
                    value={messageData.message}
                    onChange={handleChange}
                />
            </div>
            <div className={buttonDivStyle}>
                <button
                    className={combinedGreenStyles}
                >
                    Send
                </button>
                <button
                    onClick={handleClear}
                    className={combinedCyanStyles}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};