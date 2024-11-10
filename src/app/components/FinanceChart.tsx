'use client'

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 2.850000,
        expenses: 2.280000,
    },
    {
        name: 'Feb',
        income: 2.700000,
        expenses: 2.160000,
    },
    {
        name: 'Mar',
        income: 3.100000,
        expenses: 2.480000,
    },
    {
        name: 'Apr',
        income: 2.950000,
        expenses: 2.360000,
    },
    {
        name: 'May',
        income: 3.200000,
        expenses: 2.560000,
    },
    {
        name: 'Jun',
        income: 3.350000,
        expenses: 2.680000,
    },
    {
        name: 'Jul',
        income: 3.450000,
        expenses: 2.760000,
    },
    {
        name: 'Aug',
        income: 3.400000,
        expenses: 2.720000,
    },
    {
        name: 'Sep',
        income: 3.250000,
        expenses: 2.600000,
    },
    {
        name: 'Oct',
        income: 3.150000,
        expenses: 2.520000,
    },
    {
        name: 'Nov',
        income: 3.000000,
        expenses: 2.400000,
    },
    {
        name: 'Dec',
        income: 3.500000,
        expenses: 2.800000,
    },
];

export default function FinanceChart() {
    return (
        <div className="bg-white w-full h-full rounded-xl p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-black text-lg">Finance By Month {'(2024)'}</h1>
                <Image src="/more.png" alt="" width={32} height={32} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: '#d1d5db' }}
                        tickLine={false} 
                        tickMargin={10}/>
                    <YAxis
                        axisLine={false}
                        tick={{ fill: '#d1d5db' }}
                        tickLine={false}
                        tickMargin={20} />
                    <Tooltip />
                    <Legend
                        align='center'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: '5px', paddingBottom: '40px' }} />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#caffd0"
                        activeDot={{ r: 8 }} 
                        strokeWidth={5}/>
                    <Line
                        type="monotone"
                        dataKey="expenses"
                        stroke="#b4a0e5" 
                        strokeWidth={5}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
