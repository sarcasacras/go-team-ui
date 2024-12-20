import Image from 'next/image';

export default function TableSearch() {
    return (
        <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 h-8 bg-white">
            <Image
                src="/search.png"
                alt="Search bar"
                width={14}
                height={14}
            />
            <input type="text" placeholder="Search..." className="w-[200px] pw-2 bg-transparent outline-none text-black" />
        </div>
    );
}
