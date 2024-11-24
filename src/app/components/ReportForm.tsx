'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { role } from '@/lib/data';

export default function ReportForm({ buttonStyle, buttonDivStyle }: { buttonStyle?: string, buttonDivStyle?: string }) {
    const [report, setReport] = useState<string>('');
    const [priority, setPriority] = useState<string>('Medium');
    const [type, setType] = useState<string>('Technical');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReport(e.target.value);
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value);
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    };

    const handleClear = () => {
        setReport('');
        setPriority('Medium');
        setType('Technical');
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
                <div className="flex gap-4 mb-4">
                    <select 
                        value={priority}
                        onChange={handlePriorityChange}
                        className="w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none text-black"
                    >
                        <option value="Low">Low Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="High">High Priority</option>
                        <option value="Critical">Critical Priority</option>
                    </select>
                    <select 
                        value={type}
                        onChange={handleTypeChange}
                        className="w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none text-black"
                    >
                        <option value="Technical">Technical</option>
                        <option value="Analysis">Analysis</option>
                        <option value="Financial">Financial</option>
                        <option value="Security">Security</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Management">Management</option>
                        <option value="Design">Design</option>
                    </select>
                </div>
                <textarea
                    className="w-full h-64 p-3 border-2 border-gray-300 rounded-lg resize-none focus:outline-none text-black text-lg"
                    placeholder="Type your report here..."
                    value={report}
                    onChange={handleChange}
                />
            </div>
            <div className={buttonDivStyle}>
                <button className={combinedGreenStyles}>
                    Send
                </button>
                <button onClick={handleClear} className={combinedCyanStyles}>
                    Clear
                </button>
            </div>
        </div>
    );
};
