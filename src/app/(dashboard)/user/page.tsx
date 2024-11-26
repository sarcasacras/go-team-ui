'use client'
import Announcements from "@/app/components/Announcements";
import Card from "@/app/components/Card";
import EventCalendar from "@/app/components/EventCalendar";
import NotificationCard from "@/app/components/NotificationCard";
import ProjectCard from "@/app/components/ProjectCard";
import ReportForm from "@/app/components/ReportForm";
import TaskCard from "@/app/components/TaskCard";
import TasksChart from "@/app/components/TasksChart";
import { useRole } from "@/context/RoleContext";
import { useEffect } from 'react';

function UserPage() {
    const { setRole } = useRole();

    useEffect(() => {
        setRole('workers');
    }, [setRole]);

    return (
        // whole page (left+right) 
        <div className="p-4 flex gap-3 flex-col lg:flex-row">
            {/* left part */}
            <div className="w-full lg:w-2/3 flex flex-col gap-3">
                {/* Projects and Tasks div */}
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="lg:w-1/2 w-full">
                        <Card title="Projects">
                            <ProjectCard
                                name="Project Nexus"
                                description="A comprehensive platform that integrates various business tools and services 
                                into a unified ecosystem, streamlining workflows and enhancing productivity 
                                across departments." />
                            <ProjectCard
                                name="EcoTrack"
                                description="An innovative mobile application that helps users reduce their carbon footprint by 
                                tracking daily activities, 
                                providing eco-friendly alternatives, 
                                and gamifying sustainable living." />
                            <ProjectCard
                                name="MindMeld"
                                description="A collaborative brainstorming and idea management tool that uses AI to facilitate creative thinking, 
                                organize concepts, and generate actionable insights from group discussions." />
                        </Card>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <Card title="Tasks">
                            <TaskCard
                                name="Optimize Database Queries"
                                description="Analyze and improve the performance of critical database 
                                queries to reduce response time and enhance overall system efficiency"
                                deadline="13.01.2025" />
                            <TaskCard
                                name="Design User Onboarding Flow"
                                description="Create an intuitive and engaging onboarding process for new users, 
                                including welcome screens, feature highlights, and personalized setup options."
                                deadline="23.05.2025" />
                            <TaskCard
                                name="Create Data Visualization Dashboard"
                                description="Develop an interactive dashboard that presents key metrics and insights using charts, 
                                graphs, and other visual elements."
                                deadline="28.03.2025" />
                        </Card>
                    </div>

                </div>
                {/* Tasks Chart and Notifications */}
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="lg:w-2/3 w-full">
                        <Card title="Tasks Done (Last 5 Months)">
                            <TasksChart />
                        </Card>
                    </div>
                    <div className="lg:w-1/3 w-full">
                        <Card title="Notifications">
                            <NotificationCard isRead={false} message="Sarah Johnson has joined the Development team." />
                            <NotificationCard isRead={true} message="The deadline for Project X has been extended to next Friday." />
                            <NotificationCard isRead={true} message="Don't forget the team standup at 10:00 AM today." />
                            <NotificationCard isRead={true} message="Alex has finished the UI design for the new feature." />
                        </Card>
                    </div>
                </div>
                {/* The report form */}
                <div className="w-full">
                    <ReportForm buttonDivStyle="flex gap-10 justify-end" buttonStyle="px-14 py-2" />
                </div>
            </div>
            {/* right part */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
}

export default UserPage;