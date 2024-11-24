import { reportsData } from '@/lib/data';

export default function ReportsTable() {
    return (
        <div className="overflow-x-auto mt-4 rounded-t-xl border-t-4 border-go-cyan-shadow">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th scope="col" className="p-3 text-left font-semibold text-black">Title</th>
                        <th scope="col" className="p-3 text-left font-semibold text-black">Author</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Department</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Status</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Priority</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {reportsData.map((report, index) => (
                        <tr 
                            key={report.id} 
                            className={`
                                hover:bg-go-cyan/20
                                ${index !== reportsData.length - 1 ? 'border-b border-gray-100' : ''}
                            `}
                        >
                            <td className="p-2 lg:p-3 text-black">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium">{report.title}</span>
                                </div>
                            </td>
                            <td className="p-2 lg:p-3 text-black">{report.author}</td>
                            <td className="hidden lg:table-cell p-3 text-black">{report.department}</td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${report.status === 'Submitted' ? 'bg-go-green' : 
                                    report.status === 'In Review' ? 'bg-go-cyan' : 
                                    'bg-gray-200'}`}>
                                    {report.status}
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${report.priority === 'Critical' ? 'bg-red-300' : 
                                    report.priority === 'High' ? 'bg-go-cyan' : 
                                    report.priority === 'Medium' ? 'bg-go-green' :
                                    'bg-gray-200'}`}>
                                    {report.priority}
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className="px-2 py-1 rounded-full text-xs bg-gray-200">
                                    {report.type}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}