import Announcements from "@/app/components/Announcements";
import EventCalendar from "@/app/components/EventCalendar";
import BigCalendar from "@/app/components/BigCalendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';


export default function SchedulePage() {
    return (
        // whole page
        <div className="p-4 flex gap-3 flex-col lg:flex-row">
            {/* react big calendar */}
            <div className="w-full lg:w-2/3 bg-white rounded-lg p-4 min-h-[500px]">
                <h2 className="text-black font-semibold text-xl">Calendar</h2>
                <BigCalendar />
            </div>
            {/* events and announcements */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                <EventCalendar />
                <Announcements />
            </div>
        </div>

    )
}
