'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', tasks: 7 },
  { month: 'Feb', tasks: 8 },
  { month: 'Mar', tasks: 11 },
  { month: 'Apr', tasks: 10 },
  { month: 'May', tasks: 12 },
];

const TaskLineChart = () => {
  return (
    <div className="bg-white w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-xl p-4 flex flex-col">
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={10} />
          <YAxis
            domain={[0, 25]}
            ticks={[0, 5, 10, 15, 20, 25]}
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={20} />
          <Line type="monotone" dataKey="tasks" stroke="#B4A0E5" strokeWidth={4} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskLineChart;