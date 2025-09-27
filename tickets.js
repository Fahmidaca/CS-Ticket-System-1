// src/tickets.js

const initialTickets = [
    {
        id: '1001',
        title: 'Login Issues - Can\'t Access Account',
        description: 'Customer is unable to log in after resetting their password multiple times.',
        customer: 'John Smith',
        priority: 'High',
        status: 'Open',
        createdAt: '2024-01-16'
    },
    {
        id: '1002',
        title: 'Payment Failed',
        description: 'Customer reports payment not processing during checkout.',
        customer: 'Jane Smith',
        priority: 'High',
        status: 'Open',
        createdAt: '2024-01-17'
    },
    {
        id: '1003',
        title: 'Unable to Download Invoice',
        description: 'Customer cannot download their January invoice from the billing section.',
        customer: 'Michael Brown',
        priority: 'Medium',
        status: 'Open',
        createdAt: '2024-01-18'
    },
    {
        id: '1004',
        title: 'Feature Request - Dark Mode',
        description: 'Customer requests dark mode feature to be added to the dashboard.',
        customer: 'Alice Johnson',
        priority: 'Low',
        status: 'Open',
        createdAt: '2024-01-19'
    },
    {
        id: '1005',
        title: 'App Crash on Launch',
        description: 'Customer reports that the mobile app crashes immediately upon opening on Android 13.',
        customer: 'David Wilson',
        priority: 'High',
        status: 'Open',
        createdAt: '2024-01-20'
    },
    {
        id: '1006',
        title: 'Account Deletion Request',
        description: 'Customer wants to delete their account but the process is not working.',
        customer: 'Bob Johnson',
        priority: 'Medium',
        status: 'Open',
        createdAt: '2024-01-21'
    },
    {
        id: '1007',
        title: 'Two-Factor Authentication Issue',
        description: 'Customer is not receiving 2FA codes on their registered phone number.',
        customer: 'James Anderson',
        priority: 'High',
        status: 'Open',
        createdAt: '2024-01-22'
    },
    {
        id: '1008',
        title: 'Profile Update Not Saving',
        description: 'Customer\'s profile changes are not being saved after submission.',
        customer: 'Sarah Davis',
        priority: 'Medium',
        status: 'Open',
        createdAt: '2024-01-23'
    },
    {
        id: '1009',
        title: 'Subscription Auto-Renewal',
        description: 'Customer wants to enable auto-renewal for their subscription but the toggle is disabled.',
        customer: 'Lian Thomas',
        priority: 'Medium',
        status: 'Open',
        createdAt: '2024-01-24'
    },
    {
        id: '1010',
        title: 'Email Notification Delay',
        description: 'Customer is experiencing delays in receiving email notifications.',
        customer: 'Chris Lee',
        priority: 'Low',
        status: 'Open',
        createdAt: '2024-01-25'
    },
    {
        id: '1011',
        title: 'Search Functionality Broken',
        description: 'Search feature in the dashboard is not returning any results.',
        customer: 'Emily White',
        priority: 'High',
        status: 'Open',
        createdAt: '2024-01-26'
    },
    {
        id: '1012',
        title: 'Password Reset Link Expired',
        description: 'Customer received an expired password reset link and needs a new one.',
        customer: 'Robert Taylor',
        priority: 'Medium',
        status: 'Open',
        createdAt: '2024-01-27'
    }
];

export { initialTickets as tickets };
