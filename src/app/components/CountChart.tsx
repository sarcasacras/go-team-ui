'use client'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'Done',
        count: 50,
        fill: '#caffd0',
    },
    {
        name: 'Not Done',
        count: 50,
        fill: '#b4a0e5',
    }
]

export default function CountChart() {
    return (
        <div className="bg-white w-full h-full rounded-xl p-4 flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-black text-lg">Tasks</h1>
                <Image src="/more.png" alt="" width={32} height={32} />
            </div>
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image 
                src="/done.png" 
                alt="Task Icon" 
                width={64} 
                height={64} 
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-5 h-5 bg-go-green rounded-full" />
                    <h1 className="font-normal text-black">1,234</h1>
                    <h2 className="text-xs text-gray-300">Done Tasks</h2>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-5 h-5 bg-go-wisteria rounded-full" />
                    <h1 className="font-normal text-black">1,234</h1>
                    <h2 className="text-xs text-gray-300">Not Done Tasks</h2>
                </div>
            </div>
        </div>
    )
}
