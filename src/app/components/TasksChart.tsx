'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', onTime: 9, notOnTime: 15 },
    { name: 'Feb', onTime: 3, notOnTime: 19 },
    { name: 'Mar', onTime: 13, notOnTime: 14 },
    { name: 'Apr', onTime: 8, notOnTime: 18 },
    { name: 'May', onTime: 10, notOnTime: 14 },
];

export default function TasksChart() {
    return (
        <div>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={data} margin={{right: 25, top: 20}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: '#d1d5db' }}
                        tickLine={false}
                        tickMargin={10} />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: '#d1d5db' }}
                        tickLine={false}
                        tickMargin={20} />
                    <Tooltip />
                    <Legend
                        iconType='circle'
                        formatter={(value) => (
                            <p style={{ color: 'gray' }}>
                                {value}
                            </p>
                        )}
                        wrapperStyle={{
                            paddingTop: '20px',
                        }} />
                    <Bar
                        dataKey="onTime"
                        fill="#B4A0E5"
                        name="on time"
                        radius={[10, 10, 0, 0]} 
                        barSize={20}/>
                    <Bar
                        dataKey="notOnTime"
                        fill="#CAFFD0"
                        name="not on time" 
                        radius={[10, 10, 0, 0]}
                        barSize={20}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
