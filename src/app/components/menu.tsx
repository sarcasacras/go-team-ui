import Link from "next/link"
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Dashboard",
                href: role === "managers" ? "/manager" :
                      role === "admins" ? "/admin" :
                      role === "workers" ? "/user" : "/login",
                visible: ["managers", "workers", "admins"]
            },
            {
                icon: "/manager.png",
                label: "Managers",
                href: "/list/managers",
                visible: ["admins"]
            },
            {
                icon: "/user.png",
                label: "Employees",
                href: "/list/workers",
                visible: ["managers", "admins"]
            },
            {
                icon: "/department.png",
                label: "Departments",
                href: "/list/departments",
                visible: ["managers", "admins"]
            },
            {
                icon: "/project.png",
                label: "Projects",
                href: "/list/projects",
                visible: ["managers", "workers", "admins"]
            },
            {
                icon: "/tasks.png",
                label: "Tasks",
                href: "/list/tasks",
                visible: ["managers", "workers", "admins"]
            },
            {
                icon: "/calendar.png",
                label: "Schedule",
                href: "/schedule",
                visible: ["managers", "workers", "admins"]
            },
            {
                icon: "/reports.png",
                label: "Reports",
                href: "/reports",
                visible: ["managers", "admins"]
            },
            {
                icon: "/messages.png",
                label: "Messages",
                href: "/messages",
                visible: ["managers", "workers", "admins"]
            }
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "My Profile",
                href: "/profile",
                visible: ["managers", "workers", "admins"]
            },
            {
                icon: "/settings.png",
                label: "Settings",
                href: "/settings",
                visible: ["managers", "workers", "admins"]
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["managers", "workers", "admins"]
            }
        ]
    }
];

const Menu = () => {
    return (
        // background
        <div className="mt-4 text-sm bg-white">
            {/* getting menu titles (gray ones) */}
            {menuItems.map(i => (
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="text-gray-400 hidden lg:block font-light my-4">
                        {i.title}
                    </span>
                    {/* conditionally getting menu items */}
                    {i.items.map(item => {
                        if (item.visible.includes(role)) {
                            return (
                                <Link
                                    href={item.href}
                                    key={item.label}
                                    className="
                                    flex 
                                    items-center 
                                    justify-center 
                                    lg:justify-start 
                                    gap-4 
                                    text-gray-500 
                                    py-2
                                    hover:bg-go-green
                                    rounded-lg
                                    md:px-2
                                    transition
                                    duration-500
                                    "
                                >
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className="2xl:ml-4"
                                    />
                                    <span className="text-black hidden lg:inline-flex lg:items-center 2xl:text-lg 2xl:ml-7">
                                        {item.label}
                                    </span>
                                </Link>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    );
}

export default Menu;
