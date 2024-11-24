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

export const workersData = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Senior Developer",
        department: "Engineering",
        email: "sarah.j@company.com",
        status: "Active",
        joinDate: "2022-03-15",
        avatar: "/worker-avatars/sarah_johnson.png"
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "UX Designer",
        department: "Design",
        email: "m.chen@company.com",
        status: "Active",
        joinDate: "2021-11-30",
        avatar: "/worker-avatars/michael_chen.png"
    },
    {
        id: 3,
        name: "Emma Wilson",
        position: "Project Manager",
        department: "Management",
        email: "e.wilson@company.com",
        status: "On Leave",
        joinDate: "2023-01-10",
        avatar: "/worker-avatars/emma_wilson.png"
    },
    {
        id: 4,
        name: "James Rodriguez",
        position: "Frontend Developer",
        department: "Engineering",
        email: "j.rodriguez@company.com",
        status: "Active",
        joinDate: "2023-06-22",
        avatar: "/worker-avatars/james_rodriguez.png"
    },
    {
        id: 5,
        name: "Lisa Thompson",
        position: "QA Engineer",
        department: "Quality Assurance",
        email: "l.thompson@company.com",
        status: "Active",
        joinDate: "2022-09-05",
        avatar: "/worker-avatars/lisa_thompson.png"
    },
    {
        id: 6,
        name: "David Kim",
        position: "Backend Developer",
        department: "Engineering",
        email: "d.kim@company.com",
        status: "Active",
        joinDate: "2023-08-15",
        avatar: "/worker-avatars/david_kim.png"
    },
    {
        id: 7,
        name: "Anna Kowalski",
        position: "UI Designer", 
        department: "Design",
        email: "a.kowalski@company.com",
        status: "Inactive",
        joinDate: "2021-05-20",
        avatar: "/worker-avatars/anna_kowalski.png"
    },
    {
        id: 8,
        name: "Robert Garcia",
        position: "DevOps Engineer",
        department: "Engineering",
        email: "r.garcia@company.com",
        status: "Active",
        joinDate: "2022-12-01",
        avatar: "/worker-avatars/robert_garcia.png"
    },
    {
        id: 9,
        name: "Emily Brown",
        position: "Product Manager",
        department: "Management",
        email: "e.brown@company.com",
        status: "Active",
        joinDate: "2023-03-28",
        avatar: "/worker-avatars/emily_brown.png"
    },
    {
        id: 10,
        name: "Alex Turner",
        position: "Systems Architect",
        department: "Engineering",
        email: "a.turner@company.com",
        status: "Active",
        joinDate: "2021-09-14",
        avatar: "/worker-avatars/alex_turner.png"
    },
    {
        id: 11,
        name: "Maria Santos",
        position: "QA Lead",
        department: "Quality Assurance",
        email: "m.santos@company.com",
        status: "Active",
        joinDate: "2022-07-19",
        avatar: "/worker-avatars/maria_santos.png"
    },
    {
        id: 12,
        name: "John Smith",
        position: "Full Stack Developer",
        department: "Engineering",
        email: "j.smith@company.com",
        status: "On Leave",
        joinDate: "2023-02-08",
        avatar: "/worker-avatars/john_smith.png"
    },
    {
        id: 13,
        name: "Sophie Martin",
        position: "UX Researcher",
        department: "Design",
        email: "s.martin@company.com",
        status: "Active",
        joinDate: "2023-04-03",
        avatar: "/worker-avatars/sophie_martin.png"
    },
    {
        id: 14,
        name: "Ryan Parker",
        position: "Technical Lead",
        department: "Engineering",
        email: "r.parker@company.com",
        status: "Active",
        joinDate: "2021-08-24",
        avatar: "/worker-avatars/ryan_parker.png"
    },
    {
        id: 15,
        name: "Nina Patel",
        position: "Business Analyst",
        department: "Management",
        email: "n.patel@company.com",
        status: "Active",
        joinDate: "2022-11-16",
        avatar: "/worker-avatars/nina_patel.png"
    }
];

export const departmentsData = [
    {
        id: 1,
        name: "Engineering",
        description: "Software development and technical infrastructure",
        head: "Ryan Parker",
        employeeCount: 5,
        color: "go-cyan"
    },
    {
        id: 2,
        name: "Design",
        description: "User experience and interface design",
        head: "Michael Chen",
        employeeCount: 2,
        color: "go-green"
    },
    {
        id: 3,
        name: "Management",
        description: "Project and business management",
        head: "Emma Wilson",
        employeeCount: 2,
        color: "go-cyan"
    },
    {
        id: 4,
        name: "Quality Assurance",
        description: "Software testing and quality control",
        head: "Maria Santos",
        employeeCount: 1,
        color: "go-green"
    },
    {
        id: 5,
        name: "Marketing",
        description: "Brand development and market strategies",
        head: "Alice Cooper",
        employeeCount: 3,
        color: "go-cyan"
    },
    {
        id: 6,
        name: "Human Resources",
        description: "Employee relations and recruitment",
        head: "Daniel Brown",
        employeeCount: 2,
        color: "go-green"
    },
    {
        id: 7,
        name: "Finance",
        description: "Financial planning and accounting",
        head: "Patricia Wang",
        employeeCount: 4,
        color: "go-cyan"
    },
    {
        id: 8,
        name: "Customer Support",
        description: "Client assistance and service management",
        head: "Thomas Anderson",
        employeeCount: 3,
        color: "go-green"
    }
];