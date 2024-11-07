'use client'

import React, { useState } from 'react'
import { Calendar, momentLocalizer, View, Views, DateLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { companyEvents } from '@/lib/data'

const localizer: DateLocalizer = momentLocalizer(moment)

const BigCalendar: React.FC = () => {
    
    const [view, setView] = useState<View>(Views.MONTH)
    const [date, setDate] = useState<Date>(new Date())

    const handleOnChangeView = (newView: View) => {
        setView(newView)
    }

    const handleNavigate = (newDate: Date, view: View, action: 'PREV' | 'NEXT' | 'TODAY') => {
        setDate(newDate)
        // additional logic here if needed, e.g., fetching events for the new date range
    }

    const CustomToolbar: React.FC<any> = (toolbar) => {
        const goToPrev = () => {
            toolbar.onNavigate('PREV')
        }

        const goToNext = () => {
            toolbar.onNavigate('NEXT')
        }

        const goToToday = () => {
            toolbar.onNavigate('TODAY')
        }

        return (
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg">
                {/* Navigation buttons */}
                <div className="flex space-x-2">
                    <button
                        type="button"
                        onClick={goToPrev}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={goToToday}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                    >
                        Today
                    </button>
                    <button
                        type="button"
                        onClick={goToNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                    >
                        Next
                    </button>
                </div>
                {/* Current date range label */}
                <span className="text-lg font-semibold text-gray-700">{toolbar.label}</span>
                {/* View selection buttons */}
                <div className="flex space-x-2">
                    {toolbar.views.map((name: string) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => toolbar.onView(name)}
                            className={`px-4 py-2 rounded transition duration-300 ${
                                view === name
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <Calendar
            // Required: Localizer for date formatting
            localizer={localizer}
            // Your array of event objects
            events={companyEvents}
            // Specify how to access the start date from your event objects
            startAccessor="start"
            // Specify how to access the end date from your event objects
            endAccessor="end"
            // Available views (month and day in this case)
            views={['month', 'day']}
            // Current view (controlled by state)
            view={view}
            // Current date (controlled by state)
            date={date}
            // Set the height of the calendar (adjust as needed)
            style={{ height: '98%' }}
            // Handler for view changes
            onView={handleOnChangeView}
            // Handler for date navigation
            // 'as any' is used to bypass TypeScript errors due to type mismatches
            // Consider updating @types/react-big-calendar if this causes issues
            onNavigate={handleNavigate as any}
            // Set the minimum time to display (for day view)
            min={new Date(2024, 9, 19, 7, 0, 0)}
            // Set the maximum time to display (for day view)
            max={new Date(2024, 9, 19, 18, 0, 0)}
            // Custom components (in this case, just the toolbar)
            components={{
                toolbar: CustomToolbar,
            }}
        />
    )
}

export default BigCalendar