import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/WorkersTable";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";

export default function WorkersPage() {
    return (
        <div className="bg-white p-4 flex-1 rounded-md m-4 mt-0 text-black">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-xl font-semibold">Workers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
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
            {/* LIST */}
            <Table />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
}