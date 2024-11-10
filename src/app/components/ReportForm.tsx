'use client'
import Image from 'next/image';
import React, { useState } from 'react';

export default function ReportForm({ buttonStyle, buttonDivStyle }: { buttonStyle?: string, buttonDivStyle?: string }) {
    const [report, setReport] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReport(e.target.value);
    };

    const handleClear = () => {
        setReport('');
    };

    const baseGreenStyles = 'bg-go-green font-bold text-gray-800 rounded-xl border-t-4 border-t-go-green-shadow hover:bg-[#aafcb3] transition duration-500';
    const baseCyanStyles = 'bg-go-cyan font-bold text-gray-800 rounded-xl border-t-4 border-t-go-cyan-shadow hover:bg-[#a6e2e9] transition duration-500';
    const combinedGreenStyles = `${baseGreenStyles} ${buttonStyle}`
    const combinedCyanStyles = `${baseCyanStyles} ${buttonStyle}`

    return (
        <div className="bg-white p-4 rounded-lg min-h-[250px] flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-black font-semibold text-xl">Report Form</h2>
                <Image src='/more.png' alt='More options' height={32} width={32} />
            </div>
            <div className="mb-4">
                <textarea
                    className="w-full h-64 p-3 border-2 border-gray-300 rounded-lg resize-none focus:outline-none text-black text-lg"
                    placeholder="Type your report here..."
                    value={report}
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

