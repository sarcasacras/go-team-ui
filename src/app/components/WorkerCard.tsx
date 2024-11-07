import Image from "next/image"

export default function WorkerCard({ name, title, imageUrl }: { name: string, title: string, imageUrl: string }) {
    return (
        <div className="w-full">
            <div className="bg-white rounded-lg p-4 flex md:flex-row flex-col items-center mb-4 mx-2 border-t-4 border-2 border-gray-200">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-none md:m-0 m-2 mb-6 lg:mb-0">
                    <Image
                        src={imageUrl}
                        alt={`${name}'s profile`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="flex-1 text-center flex flex-col justify-center">
                    <h2 className="xl:text-lg font-semibold text-gray-800 lg:text-sm text-lg">{name}</h2>
                    <p className="text-gray-600 lg:text-xs xl:text-base">{title}</p>
                </div>
            </div>
        </div>
    )
}
