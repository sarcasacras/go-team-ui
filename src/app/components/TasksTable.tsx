import { tasksData } from '@/lib/data';

export default function TasksTable() {
    return (
        <div className="overflow-x-auto mt-4 rounded-t-xl border-t-4 border-go-cyan-shadow">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th scope="col" className="p-3 text-left font-semibold text-black">Task Name</th>
                        <th scope="col" className="p-3 text-left font-semibold text-black">Project</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Assignee</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Status</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Priority</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksData.map((task, index) => (
                        <tr 
                            key={task.id} 
                            className={`
                                hover:bg-go-cyan/20
                                ${index !== tasksData.length - 1 ? 'border-b border-gray-100' : ''}
                            `}
                        >
                            <td className="p-2 lg:p-3 text-black">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium">{task.name}</span>
                                </div>
                            </td>
                            <td className="p-2 lg:p-3 text-black">{task.projectName}</td>
                            <td className="hidden lg:table-cell p-3 text-black">{task.assignee}</td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${task.status === 'Completed' ? 'bg-go-green' : 
                                    task.status === 'In Progress' ? 'bg-go-cyan' : 
                                    task.status === 'On Hold' ? 'bg-red-300' :
                                    'bg-gray-200'}`}>
                                    {task.status}
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${task.priority === 'Critical' ? 'bg-red-300' : 
                                    task.priority === 'High' ? 'bg-go-cyan' : 
                                    task.priority === 'Medium' ? 'bg-go-green' :
                                    'bg-gray-200'}`}>
                                    {task.priority}
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div 
                                        className="bg-go-cyan h-2.5 rounded-full"
                                        style={{ width: `${task.completionRate}%` }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-500 mt-1">{task.completionRate}%</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}