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

export const projectsData = [
    {
        id: 1,
        name: "Mobile App Redesign",
        department: "Design",
        lead: "Michael Chen",
        status: "In Progress",
        deadline: "2024-06-30",
        priority: "High",
        budget: 85000,
        completionRate: 45
    },
    {
        id: 2,
        name: "Cloud Infrastructure Migration",
        department: "Engineering",
        lead: "Ryan Parker",
        status: "In Progress",
        deadline: "2024-08-15",
        priority: "Critical",
        budget: 120000,
        completionRate: 30
    },
    {
        id: 3,
        name: "Employee Training Portal",
        department: "Human Resources",
        lead: "Daniel Brown",
        status: "Planning",
        deadline: "2024-09-01",
        priority: "Medium",
        budget: 45000,
        completionRate: 0
    },
    {
        id: 4,
        name: "Q2 Marketing Campaign",
        department: "Marketing",
        lead: "Alice Cooper",
        status: "In Progress",
        deadline: "2024-06-15",
        priority: "High",
        budget: 75000,
        completionRate: 60
    },
    {
        id: 5,
        name: "Financial Reporting System",
        department: "Finance",
        lead: "Patricia Wang",
        status: "In Progress",
        deadline: "2024-07-30",
        priority: "High",
        budget: 95000,
        completionRate: 40
    },
    {
        id: 6,
        name: "Customer Feedback Integration",
        department: "Customer Support",
        lead: "Thomas Anderson",
        status: "Completed",
        deadline: "2024-03-15",
        priority: "Medium",
        budget: 35000,
        completionRate: 100
    },
    {
        id: 7,
        name: "Security Audit 2024",
        department: "Quality Assurance",
        lead: "Maria Santos",
        status: "In Progress",
        deadline: "2024-12-31",
        priority: "Critical",
        budget: 65000,
        completionRate: 25
    },
    {
        id: 8,
        name: "AI Chat Implementation",
        department: "Engineering",
        lead: "Sarah Johnson",
        status: "Planning",
        deadline: "2024-10-15",
        priority: "High",
        budget: 110000,
        completionRate: 10
    },
    {
        id: 9,
        name: "Brand Refresh 2024",
        department: "Design",
        lead: "Michael Chen",
        status: "In Progress",
        deadline: "2024-08-30",
        priority: "Medium",
        budget: 55000,
        completionRate: 50
    },
    {
        id: 10,
        name: "Performance Review System",
        department: "Human Resources",
        lead: "Daniel Brown",
        status: "On Hold",
        deadline: "2024-11-30",
        priority: "Low",
        budget: 25000,
        completionRate: 15
    },
    {
        id: 11,
        name: "Data Analytics Dashboard",
        department: "Engineering",
        lead: "David Kim",
        status: "In Progress",
        deadline: "2024-07-15",
        priority: "High",
        budget: 90000,
        completionRate: 70
    },
    {
        id: 12,
        name: "Social Media Strategy",
        department: "Marketing",
        lead: "Alice Cooper",
        status: "Planning",
        deadline: "2024-09-15",
        priority: "Medium",
        budget: 40000,
        completionRate: 5
    },
    {
        id: 13,
        name: "Budget Optimization Tool",
        department: "Finance",
        lead: "Patricia Wang",
        status: "In Progress",
        deadline: "2024-06-30",
        priority: "High",
        budget: 70000,
        completionRate: 55
    },
    {
        id: 14,
        name: "Help Center Redesign",
        department: "Customer Support",
        lead: "Thomas Anderson",
        status: "Planning",
        deadline: "2024-10-01",
        priority: "Medium",
        budget: 30000,
        completionRate: 0
    },
    {
        id: 15,
        name: "Automated Testing Framework",
        department: "Quality Assurance",
        lead: "Maria Santos",
        status: "In Progress",
        deadline: "2024-08-15",
        priority: "High",
        budget: 85000,
        completionRate: 35
    },
    {
        id: 16,
        name: "Mobile Payment Integration",
        department: "Engineering",
        lead: "James Rodriguez",
        status: "Planning",
        deadline: "2024-11-15",
        priority: "High",
        budget: 100000,
        completionRate: 0
    },
    {
        id: 17,
        name: "Employee Onboarding System",
        department: "Human Resources",
        lead: "Daniel Brown",
        status: "In Progress",
        deadline: "2024-07-01",
        priority: "Medium",
        budget: 45000,
        completionRate: 80
    },
    {
        id: 18,
        name: "Q3 Marketing Campaign",
        department: "Marketing",
        lead: "Alice Cooper",
        status: "Planning",
        deadline: "2024-09-30",
        priority: "High",
        budget: 80000,
        completionRate: 0
    },
    {
        id: 19,
        name: "Expense Management System",
        department: "Finance",
        lead: "Patricia Wang",
        status: "Completed",
        deadline: "2024-03-31",
        priority: "Medium",
        budget: 60000,
        completionRate: 100
    },
    {
        id: 20,
        name: "Customer Satisfaction Survey",
        department: "Customer Support",
        lead: "Thomas Anderson",
        status: "In Progress",
        deadline: "2024-06-15",
        priority: "Medium",
        budget: 25000,
        completionRate: 65
    },
    {
        id: 21,
        name: "API Documentation",
        department: "Engineering",
        lead: "Ryan Parker",
        status: "In Progress",
        deadline: "2024-07-15",
        priority: "Medium",
        budget: 40000,
        completionRate: 40
    },
    {
        id: 22,
        name: "UX Research Study",
        department: "Design",
        lead: "Sophie Martin",
        status: "Planning",
        deadline: "2024-10-30",
        priority: "High",
        budget: 50000,
        completionRate: 0
    },
    {
        id: 23,
        name: "Compliance Training Program",
        department: "Human Resources",
        lead: "Daniel Brown",
        status: "On Hold",
        deadline: "2024-12-15",
        priority: "Low",
        budget: 30000,
        completionRate: 10
    },
    {
        id: 24,
        name: "Year-End Financial Report",
        department: "Finance",
        lead: "Patricia Wang",
        status: "Planning",
        deadline: "2024-12-31",
        priority: "Critical",
        budget: 55000,
        completionRate: 0
    },
    {
        id: 25,
        name: "Legacy System Migration",
        department: "Engineering",
        lead: "Sarah Johnson",
        status: "In Progress",
        deadline: "2024-11-30",
        priority: "Critical",
        budget: 150000,
        completionRate: 20
    }
];

export const tasksData = [
    {
        id: 1,
        name: "Design System Updates",
        projectId: 1,
        projectName: "Mobile App Redesign",
        assignee: "Michael Chen",
        status: "In Progress",
        deadline: "2024-05-15",
        priority: "High",
        completionRate: 60,
        description: "Update design system components for mobile app"
    },
    {
        id: 2,
        name: "Database Migration Planning",
        projectId: 2,
        projectName: "Cloud Infrastructure Migration",
        assignee: "David Kim",
        status: "In Progress",
        deadline: "2024-07-01",
        priority: "Critical",
        completionRate: 40,
        description: "Plan database migration strategy and timeline"
    },
    {
        id: 3,
        name: "Training Module Development",
        projectId: 3,
        projectName: "Employee Training Portal",
        assignee: "James Rodriguez",
        status: "Not Started",
        deadline: "2024-08-15",
        priority: "Medium",
        completionRate: 0,
        description: "Develop interactive training modules"
    },
    {
        id: 4,
        name: "Social Media Content Creation",
        projectId: 4,
        projectName: "Q2 Marketing Campaign",
        assignee: "Sophie Martin",
        status: "In Progress",
        deadline: "2024-06-01",
        priority: "High",
        completionRate: 75,
        description: "Create social media content calendar and assets"
    },
    {
        id: 5,
        name: "Financial Dashboard UI",
        projectId: 5,
        projectName: "Financial Reporting System",
        assignee: "Anna Kowalski",
        status: "In Progress",
        deadline: "2024-07-15",
        priority: "High",
        completionRate: 30,
        description: "Design and implement financial dashboard interface"
    },
    {
        id: 6,
        name: "API Integration",
        projectId: 6,
        projectName: "Customer Feedback Integration",
        assignee: "Sarah Johnson",
        status: "Completed",
        deadline: "2024-03-10",
        priority: "Medium",
        completionRate: 100,
        description: "Integrate customer feedback API endpoints"
    },
    {
        id: 7,
        name: "Security Assessment",
        projectId: 7,
        projectName: "Security Audit 2024",
        assignee: "Lisa Thompson",
        status: "In Progress",
        deadline: "2024-11-30",
        priority: "Critical",
        completionRate: 20,
        description: "Conduct security assessment of systems"
    },
    {
        id: 8,
        name: "ChatBot Development",
        projectId: 8,
        projectName: "AI Chat Implementation",
        assignee: "John Smith",
        status: "Planning",
        deadline: "2024-09-30",
        priority: "High",
        completionRate: 5,
        description: "Develop AI chatbot core functionality"
    },
    {
        id: 9,
        name: "Logo Redesign",
        projectId: 9,
        projectName: "Brand Refresh 2024",
        assignee: "Michael Chen",
        status: "In Progress",
        deadline: "2024-08-15",
        priority: "Medium",
        completionRate: 45,
        description: "Redesign company logo and brand assets"
    },
    {
        id: 10,
        name: "Performance Metrics Setup",
        projectId: 10,
        projectName: "Performance Review System",
        assignee: "Nina Patel",
        status: "On Hold",
        deadline: "2024-11-15",
        priority: "Low",
        completionRate: 10,
        description: "Define and implement performance metrics"
    },
    {
        id: 11,
        name: "Data Visualization",
        projectId: 11,
        projectName: "Data Analytics Dashboard",
        assignee: "Robert Garcia",
        status: "In Progress",
        deadline: "2024-07-01",
        priority: "High",
        completionRate: 65,
        description: "Implement data visualization components"
    },
    {
        id: 12,
        name: "Content Strategy Document",
        projectId: 12,
        projectName: "Social Media Strategy",
        assignee: "Emily Brown",
        status: "Planning",
        deadline: "2024-09-01",
        priority: "Medium",
        completionRate: 15,
        description: "Develop comprehensive content strategy"
    },
    {
        id: 13,
        name: "Budget Analysis Tools",
        projectId: 13,
        projectName: "Budget Optimization Tool",
        assignee: "Alex Turner",
        status: "In Progress",
        deadline: "2024-06-15",
        priority: "High",
        completionRate: 50,
        description: "Develop budget analysis and forecasting tools"
    },
    {
        id: 14,
        name: "Knowledge Base Structure",
        projectId: 14,
        projectName: "Help Center Redesign",
        assignee: "Sophie Martin",
        status: "Planning",
        deadline: "2024-09-15",
        priority: "Medium",
        completionRate: 0,
        description: "Design knowledge base structure and categories"
    },
    {
        id: 15,
        name: "Test Automation Framework",
        projectId: 15,
        projectName: "Automated Testing Framework",
        assignee: "Maria Santos",
        status: "In Progress",
        deadline: "2024-08-01",
        priority: "High",
        completionRate: 40,
        description: "Develop automated testing framework"
    }
];