export default function TaskCard(
    { name, description, deadline }: { name: string, description: string, deadline: string }) {
    return (
        <div className="bg-go-cyan p-3 rounded-lg mb-3 border-t-go-cyan-shadow border-t-4">
            <div className="">
                <div className="flex justify-between items-start">
                    <h3 className="text-black text-xl font-light">{name}</h3>
                    <span className="text-xs text-gray-500 italic underline">deadline: {deadline}</span>
                </div>
                <p className="text-sm text-black py-2">{description}</p>
            </div>
        </div>
    )
}
