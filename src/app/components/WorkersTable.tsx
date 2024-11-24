import { workersData } from '@/lib/data';
import Image from 'next/image';

export default function Table() {
    return (
        <div className="overflow-x-auto mt-4 rounded-t-xl border-t-4 border-go-cyan-shadow">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th scope="col" className="p-3 text-left font-semibold text-black">Worker</th>
                        <th scope="col" className="p-3 text-left font-semibold text-black">Position</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Department</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Email</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Status</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Join Date</th>
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
                            <td className="p-2 lg:p-3 text-black">
                                <div className="flex items-center gap-3 lg:gap-10">
                                    <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image 
                                            src={worker.avatar} 
                                            alt={`${worker.name}'s avatar`}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="font-medium">{worker.name}</span>
                                </div>
                            </td>
                            <td className="p-2 lg:p-3 text-black">{worker.position}</td>
                            <td className="hidden lg:table-cell p-3 text-black">{worker.department}</td>
                            <td className="hidden lg:table-cell p-3 text-black">{worker.email}</td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${worker.status === 'Active' ? 'bg-go-green' : 
                                    worker.status === 'Inactive' ? 'bg-go-cyan' : 
                                    'bg-red-300'}`}>
                                    {worker.status}
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black">{worker.joinDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}