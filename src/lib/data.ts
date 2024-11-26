export let role = '';

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
        title: "Department Updates",
        allDay: false,
        start: createDate(1, 14, 0), // Same day as Monthly Kickoff
        end: createDate(1, 15, 30),
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
        title: "Sprint Planning",
        allDay: false,
        start: createDate(7, 10, 0), // Same day as Product Roadmap
        end: createDate(7, 12, 0),
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
        title: "Q4 Planning",
        allDay: false,
        start: createDate(14, 14, 0), // Same day as Board Meeting
        end: createDate(14, 16, 0),
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
        title: "Security Workshop",
        allDay: false,
        start: createDate(21, 14, 0), // Same day as Cybersecurity Training
        end: createDate(21, 16, 0),
    },
    {
        title: "Project Milestone Celebration",
        allDay: false,
        start: createDate(23, 16, 0),
        end: createDate(23, 18, 0),
    },
    {
        title: "Team Presentations",
        allDay: false,
        start: createDate(23, 13, 0), // Same day as Milestone Celebration
        end: createDate(23, 15, 0),
    },
    {
        title: "Month-End Office Party",
        allDay: false,
        start: createDate(lastDay, 15, 0),
        end: createDate(lastDay, 19, 0),
    },
    {
        title: "Department Reviews",
        allDay: false,
        start: createDate(lastDay, 10, 0), // Same day as Office Party
        end: createDate(lastDay, 14, 0),
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

export const messagesData = [
    {
        id: 1,
        sender: "Michael Chen",
        subject: "Design Review Meeting",
        date: "2023-10-15",
        status: "Unread",
        avatar: "/worker-avatars/michael_chen.png"
    },
    {
        id: 2,
        sender: "Emma Wilson",
        subject: "Project Timeline Update",
        date: "2023-10-14",
        status: "Read",
        avatar: "/worker-avatars/emma_wilson.png"
    },
    {
        id: 3,
        sender: "David Kim",
        subject: "Backend Deployment",
        date: "2023-10-13",
        status: "Unread",
        avatar: "/worker-avatars/david_kim.png"
    },
    {
        id: 4,
        sender: "Sarah Johnson",
        subject: "New Feature Request",
        date: "2023-10-12",
        status: "Read",
        avatar: "/worker-avatars/sarah_johnson.png"
    },
    {
        id: 5,
        sender: "Emily Brown",
        subject: "Meeting Reschedule",
        date: "2023-10-11",
        status: "Unread",
        avatar: "/worker-avatars/emily_brown.png"
    },
    {
        id: 6,
        sender: "James Rodriguez",
        subject: "Code Review Feedback",
        date: "2023-10-10",
        status: "Read",
        avatar: "/worker-avatars/james_rodriguez.png"
    },
    {
        id: 7,
        sender: "Lisa Thompson",
        subject: "QA Test Results",
        date: "2023-10-09",
        status: "Unread",
        avatar: "/worker-avatars/lisa_thompson.png"
    },
    {
        id: 8,
        sender: "Robert Garcia",
        subject: "Server Maintenance",
        date: "2023-10-08",
        status: "Read",
        avatar: "/worker-avatars/robert_garcia.png"
    },
    {
        id: 9,
        sender: "John Smith",
        subject: "API Integration",
        date: "2023-10-07",
        status: "Unread",
        avatar: "/worker-avatars/john_smith.png"
    },
    {
        id: 10,
        sender: "Anna Kowalski",
        subject: "UI Updates",
        date: "2023-10-06",
        status: "Read",
        avatar: "/worker-avatars/anna_kowalski.png"
    }
];

export const reportsData = [
    {
        id: 1,
        author: "Ryan Parker",
        department: "Engineering",
        title: "Q1 Technical Infrastructure Review",
        date: "2024-03-30",
        status: "Submitted",
        priority: "High",
        type: "Technical",
        content: "Comprehensive analysis of our current technical infrastructure including cloud services utilization, system performance metrics, and recommendations for Q2 improvements."
    },
    {
        id: 2,
        author: "Michael Chen",
        department: "Design",
        title: "User Experience Analysis",
        date: "2024-03-25",
        status: "In Review",
        priority: "Medium",
        type: "Analysis",
        content: "Detailed review of user interaction patterns, pain points identified during usability testing, and proposed solutions for improving overall user experience."
    },
    {
        id: 3,
        author: "Patricia Wang",
        department: "Finance",
        title: "Monthly Budget Report",
        date: "2024-03-31",
        status: "Submitted",
        priority: "Critical",
        type: "Financial",
        content: "Monthly financial overview including project budgets, department expenses, and resource allocation recommendations for upcoming projects."
    },
    {
        id: 4,
        author: "Maria Santos",
        department: "Quality Assurance",
        title: "Security Compliance Report",
        date: "2024-03-28",
        status: "Draft",
        priority: "High",
        type: "Security",
        content: "Assessment of current security measures, compliance status with industry standards, and identified areas requiring immediate attention."
    },
    {
        id: 5,
        author: "Daniel Brown",
        department: "Human Resources",
        title: "Employee Satisfaction Survey Results",
        date: "2024-03-27",
        status: "Submitted",
        priority: "Medium",
        type: "HR",
        content: "Analysis of quarterly employee satisfaction survey results, key findings, and proposed action items for improving workplace satisfaction."
    },
    {
        id: 6,
        author: "Alice Cooper",
        department: "Marketing",
        title: "Q1 Marketing Performance",
        date: "2024-03-29",
        status: "In Review",
        priority: "High",
        type: "Marketing",
        content: "Quarterly marketing campaign results, ROI analysis, and strategic recommendations for Q2 marketing initiatives."
    },
    {
        id: 7,
        author: "Thomas Anderson",
        department: "Customer Support",
        title: "Customer Feedback Analysis",
        date: "2024-03-26",
        status: "Draft",
        priority: "Medium",
        type: "Analysis",
        content: "Summary of customer feedback trends, support ticket analysis, and proposed improvements for customer service processes."
    },
    {
        id: 8,
        author: "Emma Wilson",
        department: "Management",
        title: "Project Management Overview",
        date: "2024-03-24",
        status: "Submitted",
        priority: "High",
        type: "Management",
        content: "Overview of current project statuses, resource allocation efficiency, and recommendations for improving project delivery timelines."
    },
    {
        id: 9,
        author: "David Kim",
        department: "Engineering",
        title: "Backend Performance Metrics",
        date: "2024-03-23",
        status: "In Review",
        priority: "High",
        type: "Technical",
        content: "Analysis of backend system performance, identified bottlenecks, and proposed optimization solutions."
    },
    {
        id: 10,
        author: "Sophie Martin",
        department: "Design",
        title: "Design System Evaluation",
        date: "2024-03-22",
        status: "Draft",
        priority: "Medium",
        type: "Design",
        content: "Evaluation of current design system implementation, consistency audit results, and recommendations for improvement."
    }
];

export const managersData = [
    {
        id: 1,
        name: "Ryan Parker",
        department: "Engineering",
        position: "Engineering Director",
        email: "r.parker@company.com",
        reports: 7,
        experience: "12 years",
        status: "Active",
        avatar: "/worker-avatars/ryan_parker.png",
        managementLevel: "Director",
        keyResponsibilities: [
            "Technical Leadership",
            "Team Development",
            "Project Oversight",
            "Architecture Planning"
        ]
    },
    {
        id: 2,
        name: "Michael Chen",
        department: "Design",
        position: "Design Director",
        email: "m.chen@company.com",
        reports: 4,
        experience: "8 years",
        status: "Active",
        avatar: "/worker-avatars/michael_chen.png",
        managementLevel: "Director",
        keyResponsibilities: [
            "Design Strategy",
            "UX Leadership",
            "Brand Guidelines",
            "Team Coordination"
        ]
    },
    {
        id: 3,
        name: "Emma Wilson",
        department: "Management",
        position: "Senior Project Manager",
        email: "e.wilson@company.com",
        reports: 5,
        experience: "9 years",
        status: "Active",
        avatar: "/worker-avatars/emma_wilson.png",
        managementLevel: "Senior Manager",
        keyResponsibilities: [
            "Project Portfolio",
            "Resource Management",
            "Risk Assessment",
            "Stakeholder Relations"
        ]
    },
    {
        id: 4,
        name: "Maria Santos",
        department: "Quality Assurance",
        position: "QA Director",
        email: "m.santos@company.com",
        reports: 3,
        experience: "10 years",
        status: "Active",
        avatar: "/worker-avatars/maria_santos.png",
        managementLevel: "Director",
        keyResponsibilities: [
            "Quality Strategy",
            "Testing Leadership",
            "Process Improvement",
            "Compliance Oversight"
        ]
    },
    {
        id: 5,
        name: "Alice Cooper",
        department: "Marketing",
        position: "Marketing Director",
        email: "a.cooper@company.com",
        reports: 6,
        experience: "11 years",
        status: "Active",
        avatar: "/worker-avatars/alice_cooper.png",
        managementLevel: "Director",
        keyResponsibilities: [
            "Marketing Strategy",
            "Brand Management",
            "Campaign Oversight",
            "Market Analysis"
        ]
    },
    {
        id: 6,
        name: "Daniel Brown",
        department: "Human Resources",
        position: "HR Director",
        email: "d.brown@company.com",
        reports: 4,
        experience: "9 years",
        status: "Active",
        avatar: "/worker-avatars/daniel_brown.png",
        managementLevel: "Director",
        keyResponsibilities: [
            "HR Strategy",
            "Talent Management",
            "Employee Relations",
            "Policy Development"
        ]
    },
    {
        id: 7,
        name: "Patricia Wang",
        department: "Finance",
        position: "Finance Director",
        email: "p.wang@company.com",
        reports: 5,
        experience: "15 years",
        status: "Active",
        avatar: "/worker-avatars/patricia_wang.png",
        managementLevel: "Director",
        keyResponsibilities: [
            "Financial Strategy",
            "Budget Management",
            "Risk Assessment",
            "Financial Planning"
        ]
    },
    {
        id: 8,
        name: "Thomas Anderson",
        department: "Customer Support",
        position: "Support Director",
        email: "t.anderson@company.com",
        reports: 4,
        experience: "7 years",
        status: "Active",
        avatar: "/worker-avatars/thomas_anderson.png",
        managementLevel: "Director",
        keyResponsibilities: [
            "Support Strategy",
            "Customer Experience",
            "Team Leadership",
            "Service Quality"
        ]
    }
];