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
            <div className="xl:flex-row flex flex-col justify-between items-center p-4 bg-white rounded-t-lg">
                {/* Navigation buttons */}
                <div className="flex space-x-2">
                    <button
                        type="button"
                        onClick={goToPrev}
                        className="xl:block hidden px-4 py-2 bg-go-cyan text-black rounded hover:bg-go-cyan-shadow transition duration-300"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={goToToday}
                        className="xl:block hidden px-4 py-2 bg-go-green text-black rounded hover:bg-go-green-shadow transition duration-300"
                    >
                        Today
                    </button>
                    <button
                        type="button"
                        onClick={goToNext}
                        className="xl:block hidden px-4 py-2 bg-go-cyan text-black rounded hover:bg-go-cyan-shadow transition duration-300"
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
                            className={`px-4 py-2 rounded transition duration-300 my-3 ${
                                view === name
                                    ? 'bg-go-green text-black'
                                    : 'bg-go-cyan text-black hover:bg-go-cyan-shadow'
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
            localizer={localizer}
            events={companyEvents}
            startAccessor="start"
            endAccessor="end"
            views={['month', 'day']}
            view={view}
            date={date}
            style={{ height: '98%' , minHeight: '500px' }}
            onView={handleOnChangeView}
            // Handler for date navigation
            // 'as any' is used to bypass TypeScript errors due to type mismatches
            onNavigate={handleNavigate as any}
            min={new Date(2024, 9, 19, 6, 0, 0)}
            max={new Date(2024, 9, 19, 18, 0, 0)}
            components={{
                toolbar: CustomToolbar,
            }}
        />
    )
}

export default BigCalendar