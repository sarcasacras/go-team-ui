import { messagesData } from '@/lib/data';
import Image from 'next/image';

export default function MessagesTable() {
    return (
        <div className="overflow-x-auto mt-4 rounded-t-xl border-t-4 border-go-cyan-shadow">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-go-cyan">
                        <th className="p-3 text-left font-semibold text-black">Sender</th>
                        <th className="p-3 text-left font-semibold text-black">Subject</th>
                        <th className="hidden lg:table-cell p-3 text-left font-semibold text-black">Date</th>
                        <th className="hidden lg:table-cell p-3 text-left font-semibold text-black">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {messagesData.map((message, index) => (
                        <tr
                            key={message.id}
                            className={`hover:bg-go-cyan/20 ${
                                index !== messagesData.length - 1 ? 'border-b border-gray-100' : ''
                            }`}
                        >
                            <td className="p-2 lg:p-3 text-black">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                                        <Image 
                                            src={message.avatar} 
                                            alt={`${message.sender}'s avatar`}
                                            width={32}
                                            height={32}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="font-medium">{message.sender}</span>
                                </div>
                            </td>
                            <td className="p-2 lg:p-3 text-black">{message.subject}</td>
                            <td className="hidden lg:table-cell p-3 text-black">{message.date}</td>
                            <td className="hidden lg:table-cell p-3 text-black">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                                        message.status === 'Unread'
                                            ? 'bg-go-cyan'
                                            : message.status === 'Read'
                                            ? 'bg-go-green'
                                            : 'bg-gray-200'
                                    }`}
                                >
                                    {message.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}