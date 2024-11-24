import { projectsData } from '@/lib/data';

export default function ProjectsTable() {
    return (
        <div className="overflow-x-auto mt-4 rounded-t-xl border-t-4 border-go-cyan-shadow">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th scope="col" className="p-3 text-left font-semibold text-black">Project Name</th>
                        <th scope="col" className="p-3 text-left font-semibold text-black">Department</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Lead</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Status</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Priority</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {projectsData.map((project, index) => (
                        <tr 
                            key={project.id} 
                            className={`
                                hover:bg-go-cyan/20
                                ${index !== projectsData.length - 1 ? 'border-b border-gray-100' : ''}
                            `}
                        >
                            <td className="p-2 lg:p-3 text-black">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium">{project.name}</span>
                                </div>
                            </td>
                            <td className="p-2 lg:p-3 text-black">{project.department}</td>
                            <td className="hidden lg:table-cell p-3 text-black">{project.lead}</td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${project.status === 'Completed' ? 'bg-go-green' : 
                                    project.status === 'In Progress' ? 'bg-go-cyan' : 
                                    project.status === 'On Hold' ? 'bg-red-300' :
                                    'bg-gray-200'}`}>
                                    {project.status}
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${project.priority === 'Critical' ? 'bg-red-300' : 
                                    project.priority === 'High' ? 'bg-go-cyan' : 
                                    project.priority === 'Medium' ? 'bg-go-green' :
                                    'bg-gray-200'}`}>
                                    {project.priority}
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div 
                                        className="bg-go-cyan h-2.5 rounded-full"
                                        style={{ width: `${project.completionRate}%` }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-500 mt-1">{project.completionRate}%</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}