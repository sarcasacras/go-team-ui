import { workersData } from '@/lib/data';

export default function Table() {
    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th className="p-3 text-left font-semibold text-black">Name</th>
                        <th className="p-3 text-left font-semibold text-black">Position</th>
                        <th className="p-3 text-left font-semibold text-black">Department</th>
                        <th className="p-3 text-left font-semibold text-black">Email</th>
                        <th className="p-3 text-left font-semibold text-black">Status</th>
                        <th className="p-3 text-left font-semibold text-black">Join Date</th>
                    </tr>
                </thead>
                <tbody>
                    {workersData.map((worker, index) => (
                        <tr 
                            key={worker.id} 
                            className={`
                                hover:bg-go-cyan/20
                                ${index !== workersData.length - 1 ? 'border-b border-gray-100' : ''}
                            `}
                        >
                            <td className="p-3 text-black">{worker.name}</td>
                            <td className="p-3 text-black">{worker.position}</td>
                            <td className="p-3 text-black">{worker.department}</td>
                            <td className="p-3 text-black">{worker.email}</td>
                            <td className="p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${worker.status === 'Active' ? 'bg-go-green' : 
                                    worker.status === 'Inactive' ? 'bg-go-cyan' : 
                                    'bg-red-300'}`}>
                                    {worker.status}
                                </span>
                            </td>
                            <td className="p-3 text-black">{worker.joinDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}