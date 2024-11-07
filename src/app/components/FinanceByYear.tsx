'use client'

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '2020',
        income: 28.500000,
        expense: 22.800000,
    },
    {
        name: '2021',
        income: 30.200000,
        expense: 24.160000,
    },
    {
        name: '2022',
        income: 32.500000,
        expense: 26.000000,
    },
    {
        name: '2023',
        income: 34.800000,
        expense: 27.840000,
    },
    {
        name: '2024',
        income: 36.500000,
        expense: 29.200000,
    },
];

export default function FinanceByYear() {
    return (
        <div className='bg-white rounded-lg p-4 h-full flex flex-col'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-black text-lg'>Finance By Year (in millions)</h1>
                <Image src='/more.png' alt='' width={32} height={32} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke='#ddd' />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: '#d1d5db' }}
                        tickLine={false}
                        tickMargin={10} />
                    <YAxis
                        tick={{ fill: '#d1d5db' }}
                        tickLine={false} 
                        />
                    <Tooltip
                        contentStyle={{ borderRadius: "10px", borderColor: 'lightgray' }} />
                    <Legend
                        align='left'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: '5px', paddingBottom: '40px' }} />
                    <Bar
                        legendType='circle'
                        dataKey="income"
                        fill="#caffd0"
                        radius={[10, 10, 0, 0]} />
                    <Bar
                        legendType='circle'
                        dataKey="expense"
                        fill="#b4a0e5"
                        radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

