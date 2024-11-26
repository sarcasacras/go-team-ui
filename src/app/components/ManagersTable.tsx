import { managersData } from '@/lib/data';
import Image from 'next/image';

export default function ManagersTable() {
    return (
        <div className="overflow-x-auto mt-4 rounded-t-xl border-t-4 border-go-cyan-shadow">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th scope="col" className="p-3 text-left font-semibold text-black">Manager</th>
                        <th scope="col" className="p-3 text-left font-semibold text-black">Position</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Department</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Experience</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Reports</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {managersData.map((manager, index) => (
                        <tr
                            key={manager.id}
                            className={`
                                hover:bg-go-cyan/20
                                ${index !== managersData.length - 1 ? 'border-b border-gray-100' : ''}
                            `}
                        >
                            <td className="p-2 lg:p-3 text-black bg-white">
                                <div className="flex items-center gap-3 lg:gap-10">
                                    <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={manager.avatar}
                                            alt={`${manager.name}'s avatar`}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="font-medium">{manager.name}</span>
                                </div>
                            </td>
                            <td className="p-2 lg:p-3 text-black bg-white">{manager.position}</td>
                            <td className="hidden lg:table-cell p-3 text-black bg-white">{manager.department}</td>
                            <td className="hidden lg:table-cell p-3 text-black bg-white">{manager.experience}</td>
                            <td className="hidden lg:table-cell p-3 text-black bg-white">
                                <span className="px-2 py-1 rounded-full text-xs bg-go-green whitespace-nowrap">
                                    {manager.reports} team members
                                </span>
                            </td>
                            <td className="hidden lg:table-cell p-3 text-black bg-white">
                                <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap 
                                    ${manager.status === 'Active' ? 'bg-go-green' :
                                        manager.status === 'Inactive' ? 'bg-go-cyan' :
                                            'bg-red-300'}`}>
                                    {manager.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}