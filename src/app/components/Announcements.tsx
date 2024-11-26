export default function Announcements() {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-black font-semibold text-xl">Announcements</h1>
                <span className="text-black hidden md:inline">View All</span>
            </div>
            {/* one announcement */}
            <div className="bg-go-wisteria rounded-md p-4 mt-4 border-t-4 border-[#c7b3ff]">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Team Meeting</h2>
                    <span className="text-xs ml-4 underline">2025.02.08</span>
                </div>
                <p className="text-sm mt-1">
                    Team meeting rescheduled to Thursday at 2 PM in Conference Room A.
                    Please bring your project status reports.
                </p>
            </div>
            {/* finishes here */}
            <div className="bg-go-wisteria rounded-md p-4 mt-4 border-t-4 border-[#c7b3ff]">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Welcome Jane Smith!</h2>
                    <span className="text-xs ml-4 underline">2025.05.02</span>
                </div>
                <p className="text-sm mt-1">
                    We&apos;re excited to welcome Jane Smith as our new Marketing Director starting next Monday.
                    Stop by to say hello!
                </p>
            </div>
            <div className="bg-go-wisteria rounded-md p-4 mt-4 border-t-4 border-[#c7b3ff]">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Picnic</h2>
                    <span className="text-xs ml-4 underline">2025.12.01</span>
                </div>
                <p className="text-sm mt-1">
                    Reminder: The company picnic is coming up on Saturday, June 15th.
                    Don&apos;t forget to RSVP and sign up to bring a dish.
                </p>
            </div>
        </div>
    )
}
