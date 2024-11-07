'use client'

import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//Just as a placeholder for now
const events = [
    {
        id: 1,
        title: "Team Building Workshop",
        time: "2024-10-15 14:30",
        description: "Interactive session to improve team collaboration and communication."
    },
    {
        id: 2,
        title: "Product Launch Meeting",
        time: "2024-10-20 10:00",
        description: "Discussing strategies for upcoming product release."
    },
    {
        id: 3,
        title: "Annual Company Picnic",
        time: "2024-11-05 12:00",
        description: "Outdoor event for employees and their families with games and food."
    },
    {
        id: 4,
        title: "Client Presentation",
        time: "2024-11-10 15:45",
        description: "Presenting new project proposals to key clients."
    },
    {
        id: 5,
        title: "Tech Talk: AI in Business",
        time: "2024-11-18 13:00",
        description: "Guest speaker discussing the impact of AI on modern business practices."
    }
];

export default function EventCalendar() {

    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md text-black'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>
                    Events
                </h1>
                <Image src='/more.png' alt='' height={32} width={32} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    <div className='
                    p-5 
                    rounded-md 
                    border-2 
                    border-gray-200 
                    border-t-4'
                        key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className='font-semibold text-gray-600'>
                                {event.title}
                            </h1>
                            <span className='text-gray-300 text-sm'>
                                {event.time}
                            </span>
                        </div>
                        <p className='text-sm text-gray-600 mt-2'>
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
