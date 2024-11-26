'use client'
import Image from "next/image";
import { useRole } from "@/context/RoleContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { role, setRole } = useRole();
    const router = useRouter();

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newRole = e.target.value;
        setRole(newRole);
        
        // Redirect based on role
        switch (newRole) {
            case 'admins':
                router.push('/admin');
                break;
            case 'managers':
                router.push('/manager');
                break;
            case 'workers':
                router.push('/user');
                break;
        }
    };

    return (
        <div className="flex items-center justify-between p-4 text-black">

            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 h-8 bg-white">
                <Image
                    src="/search.png"
                    alt="Search bar"
                    width={14}
                    height={14}
                />
                <input type="text" placeholder="Search..." className="w-[200px] pw-2 bg-transparent outline-none" />
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-7 w-full justify-end">
                <select
                    value={role}
                    onChange={handleRoleChange}
                    className="px-3 py-1 bg-white rounded-full text-xs border border-gray-300 outline-none cursor-pointer"
                >
                    <option value="workers">User</option>
                    <option value="managers">Manager</option>
                    <option value="admins">Admin</option>
                </select>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/messages.png" alt="" width={32} height={32} />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/notification.png" alt="" width={32} height={32} />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white flex items-center justify-center rounded-full text-[10px]">
                        1
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <span className="text-xs leading-3 font-medium">Alex Turner</span>
                    <span className="text-[10px] text-gray-500 text-right">{role === "admins" ? "Admin" : role === "managers" ? "Manager" : "User"}</span>

                </div>
                <Image src="/avatar.png" alt="" width={32} height={32} className="rounded-full" />
            </div>
        </div>
    );
}

export default Navbar;
