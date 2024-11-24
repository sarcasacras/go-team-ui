import { departmentsData } from '@/lib/data';

export default function DepartmentsTable() {
    return (
        <div className="overflow-x-auto mt-4 rounded-t-xl border-t-4 border-go-cyan-shadow">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th scope="col" className="p-3 text-left font-semibold text-black">Department</th>
                        <th scope="col" className="p-3 text-left font-semibold text-black">Head</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Description</th>
                        <th scope="col" className="hidden lg:table-cell p-3 text-left font-semibold text-black">Employee Count</th>
                    </tr>
                </thead>
                <tbody>
                    {departmentsData.map((department, index) => (
                        <tr 
                            key={department.id} 
                            className={`
                                hover:bg-go-cyan/20
                                ${index !== departmentsData.length - 1 ? 'border-b border-gray-100' : ''}
                            `}
                        >
                            <td className="p-2 lg:p-3 text-black">
                                <div className="flex items-center gap-3">
                                    <span className={`w-3 h-3 rounded-full ${department.color}`}></span>
                                    <span className="font-medium">{department.name}</span>
                                </div>
                            </td>
                            <td className="p-2 lg:p-3 text-black">{department.head}</td>
                            <td className="hidden lg:table-cell p-3 text-black">{department.description}</td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span className="px-2 py-1 rounded-full text-xs bg-go-green">
                                    {department.employeeCount} employees
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}