export let role = "managers"

// Function to get the last day of the current month
const getLastDayOfMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

// Get current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const today = currentDate.getDate();

// Function to create a date for the current month
const createDate = (day: number, hour = 0, minute = 0) => new Date(currentYear, currentMonth, day, hour, minute);

// Get last day of current month
const lastDay = getLastDayOfMonth(currentYear, currentMonth);

export const companyEvents = [
    {
        title: "Daily Stand-up Meeting",
        allDay: false,
        start: new Date(currentYear, currentMonth, today, 9, 0),
        end: new Date(currentYear, currentMonth, today, 9, 30),
    },
    {
        title: "Monthly Kickoff Meeting",
        allDay: false,
        start: createDate(1, 9, 0),
        end: createDate(1, 11, 0),
    },
    {
        title: "Team Building Workshop",
        allDay: true,
        start: createDate(3, 9, 0),
        end: createDate(3, 17, 0),
    },
    {
        title: "Product Roadmap Review",
        allDay: false,
        start: createDate(7, 14, 0),
        end: createDate(7, 16, 30),
    },
    {
        title: "Customer Appreciation Day",
        allDay: true,
        start: createDate(10, 10, 0),
        end: createDate(10, 18, 0),
    },
    {
        title: "Board of Directors Meeting",
        allDay: false,
        start: createDate(14, 10, 0),
        end: createDate(14, 12, 0),
    },
    {
        title: "Innovation Hackathon",
        allDay: true,
        start: createDate(16, 9, 0),
        end: createDate(17, 17, 0),
    },
    {
        title: "Financial Review",
        allDay: false,
        start: createDate(18, 13, 0),
        end: createDate(18, 15, 0),
    },
    {
        title: "Employee Training: Cybersecurity",
        allDay: false,
        start: createDate(21, 10, 0),
        end: createDate(21, 12, 0),
    },
    {
        title: "Project Milestone Celebration",
        allDay: false,
        start: createDate(23, 16, 0),
        end: createDate(23, 18, 0),
    },
    {
        title: "Month-End Office Party",
        allDay: false,
        start: createDate(lastDay, 15, 0),
        end: createDate(lastDay, 19, 0),
    }
];