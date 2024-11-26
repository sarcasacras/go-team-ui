import Announcements from "@/app/components/Announcements";
import Card from "@/app/components/Card";
import DashCard from "@/app/components/DashCard";
import EventCalendar from "@/app/components/EventCalendar";
import { workersData } from "@/lib/data";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";

function ProfilePage() {
    // Select a worker, for example, Alex Turner (id: 10)
    const worker = workersData.find((worker) => worker.id === 10);

    if (!worker) {
        return <div>Worker not found</div>;
    }

    return (
        // whole page
        <div className="p-4 flex gap-3 flex-col lg:flex-row">
            {/* Left section */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">

                {/* Profile Info */}
                <div className="flex items-center gap-6 flex-row justify-evenly mt-3">
                    <div className="">
                        <Image
                            src={worker.avatar}
                            alt={worker.name}
                            width={300}
                            height={300}
                            className="rounded-full"
                        />
                    </div>
                    <div className="">
                        <h2 className="text-4xl font-semibold text-black text-center my-3">{worker.name}</h2>
                        <p className="text-gray-600 text-center">{worker.position}</p>
                        <p className="text-gray-600 text-center">{worker.email}</p>
                    </div>
                </div>
                {/* Statistics */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <DashCard type="Projects" value={10} />
                    <DashCard type="Tasks" value={25} />
                    <DashCard type="Messages" value={5} />
                    <DashCard type="Notifications" value={3} />
                </div>
                <div className="flex gap-3">
                    {/* About Me */}
                    <Card title="About Me">
                        <div className="space-y-4 text-black">
                            <p>
                                Hello, I&apos;m {worker.name}, a {worker.position} in the {worker.department} department.
                                I joined the company on {worker.joinDate} and have been actively
                                contributing to our
                                technical infrastructure and system architecture.
                            </p>
                            <p>
                                As a Systems Architect, I specialize in designing scalable
                                and maintainable software solutions.
                                My role involves making critical technical decisions
                                that shape our platform&apos;s architecture, ensuring we build robust
                                and future-proof systems.
                            </p>
                            <p>
                                I have extensive experience in cloud infrastructure,
                                distributed systems, and enterprise architecture.
                                My approach combines technical expertise with strategic
                                thinking to deliver solutions that align with our business goals.
                            </p>
                            <p>
                                Currently, I&apos;m focused on modernizing our core infrastructure
                                and implementing new architectural patterns to improve system
                                reliability and performance. I also mentor junior developers
                                and contribute to our technical documentation.
                            </p>
                        </div>
                    </Card>
                    <Card title="Projects" isAuthorized={false}>
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

            </div>

            {/* Right section */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
}

export default ProfilePage;