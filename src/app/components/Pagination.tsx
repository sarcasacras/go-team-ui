export default function Pagination() {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
            <div className="flex gap-2">
                <button className="py-2 px-4 rounded-md bg-go-green text-sm font-semibold">1</button>
                <button className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold">2</button>
                <button className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold">3</button>
                ...
                <button className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold">10</button>
            </div>
            <button className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
    );
}