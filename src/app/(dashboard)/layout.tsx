import Link from "next/link";
import Image from "next/image";
import Menu from "@/app/components/Menu";
import Navbar from "@/app/components/Navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full flex">
            <div className="w-[25%] md:w-[20%] lg:w-[18%] xl:w-[16%] p-4">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 lg:justify-start"
                >
                    <Image src="/logo.png" alt="logo" width={80} height={80} />
                    <span className="hidden lg:block text-black font-black">GoTeam</span>
                </Link>
                <Menu />
            </div>
            <div className="w-[75%] md:w-[80%] lg:w-[82%] xl:w-[84%] bg-[#e8ecfd] h-screen">
                <Navbar />
                {children}
            </div>
        </div>
    );
}