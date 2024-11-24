import Pagination from "@/app/components/Pagination";
import MessagesTable from "@/app/components/MessagesTable";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import EventCalendar from "@/app/components/EventCalendar";
import Announcements from "@/app/components/Announcements";
import MessagesForm from "@/app/components/MessagesForm";

export default function MessagesPage() {
    return (
        <div className="p-4 flex gap-3 flex-col lg:flex-row">
            {/* Left Column - Messages Table */}
            <div className="w-full lg:w-2/3">
                <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="hidden lg:block text-xl font-semibold text-black">Messages</h1>
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
                            <TableSearch />
                            <div className="flex gap-2 items-center self-end">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black p-1 opacity-30 hover:opacity-50">
                                    <Image src="/add.png" alt="add" width={28} height={28} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black p-2 opacity-30 hover:opacity-50">
                                    <Image src="/filter.png" alt="filter" width={20} height={20} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black p-1 opacity-30 hover:opacity-50">
                                    <Image src="/sort.png" alt="sort" width={20} height={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <MessagesTable />
                    <Pagination />
                </div>
                <div className="mt-3">
                    <MessagesForm buttonDivStyle="flex gap-7 md:justify-between xl:flex-row flex-col" buttonStyle="px-8 py-2 mt-1" />
                </div>
            </div>

            {/* Right Column - Calendar and Announcements */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
}