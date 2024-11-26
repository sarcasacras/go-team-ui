import Image from "next/image";

export default function DashCard({ type, value }: { type: string; value: string | number }) {
    return (
        <div
            className="
          rounded-2xl
          odd:bg-go-green
          even:bg-go-cyan
          border-t-4
          odd:border-go-green-shadow
          even:border-go-cyan-shadow 
          p-3
          text-black 
          flex-1
          min-w-[200px]"
        >
            <div className="flex justify-between items-center">
                <span className="bg-white px-2 py-1 rounded-full text-[10px] text-go-licorice">2024/25</span>
                <Image src="/more.png" alt="" width={32} height={32} />
            </div>
            <h1 className="text-2xl text-center mt-4 mb-2 font-semibold">{value}</h1>
            <h2 className="text-center capitalize text-sm text-gray-600 font-medium">{type}</h2>
        </div>
    );
}


