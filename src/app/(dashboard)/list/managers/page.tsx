import Pagination from "@/app/components/Pagination";
import ManagersTable from "@/app/components/ManagersTable";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import EventCalendar from "@/app/components/EventCalendar";
import Announcements from "@/app/components/Announcements";
import DashCard from "@/app/components/DashCard";
import { managersData } from "@/lib/data";

export default function ManagersPage() {
    // Calculate summary statistics
    const totalManagers = managersData.length;
    const totalDirectors = managersData.filter(m => m.managementLevel === "Director").length;
    const totalTeamMembers = managersData.reduce((sum, m) => sum + m.reports, 0);
    const avgExperience = Math.round(
        managersData.reduce((sum, m) => sum + parseInt(m.experience), 0) / totalManagers
    );

    return (
        <div className="p-4 flex gap-3 flex-col lg:flex-row">
            {/* Left Column - Managers Table */}
            <div className="w-full lg:w-2/3">
                {/* Summary Cards */}
                <div className="flex gap-4 justify-between flex-wrap mb-4">
                    <DashCard type="total managers" value={totalManagers} />
                    <DashCard type="directors" value={totalDirectors} />
                    <DashCard type="total team members" value={totalTeamMembers} />
                    <DashCard type="avg. experience" value={`${avgExperience} years`} />
                </div>
                <div className="bg-white p-4 rounded-lg">
                    {/* Table and Controls */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="hidden lg:block text-xl font-semibold text-black">Managers</h1>
                        </div>
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
                    <ManagersTable />
                    <Pagination />
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