'use client'
import Announcements from "@/app/components/Announcements";
import CountChart from "@/app/components/CountChart";
import DashCard from "@/app/components/DashCard";
import EventCalendar from "@/app/components/EventCalendar";
import FinanceByYear from "@/app/components/FinanceByYear";
import FinanceChart from "@/app/components/FinanceChart";
import { useRole } from "@/context/RoleContext";
import { useEffect } from 'react';

function AdminPage() {
    const { setRole } = useRole();

    useEffect(() => {
        setRole('admins');
    }, [setRole]);

    return (
        <div className="p-4 flex gap-3 flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 flex flex-col gap-3">
                <div className="flex gap-4 justify-between flex-wrap">
                    <DashCard type="workers" value={1203}/>
                    <DashCard type="projects" value={430}/>
                    <DashCard type="tasks" value={4020}/>
                    <DashCard type="managers" value={23}/>
                </div>
                <div className="flex gap-3 flex-col lg:flex-row"> 
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <FinanceByYear />
                    </div>
                </div>
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
}

export default AdminPage;