const tickets = [
  {
    id: "TKT-8956972",
    title: "Login Issues - Can't Access Account",
    description: "Customer reports being unable to log in despite entering correct credentials. The page refreshes but does not redirect to the dashboard.",
    customer: "Sarah Johnson",
    priority: "High",
    status: "Open",
    createdAt: "2024-07-12"
  },
  {
    id: "TKT-7834521",
    title: "Payment Failed - Card Declined",
    description: "Transaction keeps failing with error code E-4021. Customer has confirmed the card works on other platforms and has sufficient balance.",
    customer: "Michael Chen",
    priority: "High",
    status: "Open",
    createdAt: "2024-07-15"
  },
  {
    id: "TKT-6521908",
    title: "Slow Page Load on Dashboard",
    description: "Dashboard takes over 15 seconds to load after login. Customer is using Chrome on a stable internet connection with no extensions enabled.",
    customer: "Emily Rodriguez",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2024-07-18"
  },
  {
    id: "TKT-5439876",
    title: "Email Notifications Not Received",
    description: "Customer has not received any email notifications for the past two weeks. Spam and junk folders have been checked with no results found.",
    customer: "David Kim",
    priority: "Medium",
    status: "Open",
    createdAt: "2024-07-20"
  },
  {
    id: "TKT-4398712",
    title: "Profile Picture Upload Fails",
    description: "Attempting to upload a profile picture results in a timeout error. The file is a standard JPEG under 2MB and meets all requirements.",
    customer: "Jessica Martinez",
    priority: "Low",
    status: "Open",
    createdAt: "2024-07-22"
  },
  {
    id: "TKT-3287654",
    title: "Incorrect Billing Amount Charged",
    description: "Customer was charged $49.99 instead of the $29.99 subscription plan they selected during checkout. Requesting a billing correction.",
    customer: "Robert Taylor",
    priority: "High",
    status: "Open",
    createdAt: "2024-07-25"
  },
  {
    id: "TKT-2176543",
    title: "Mobile App Crashes on Startup",
    description: "The iOS app crashes immediately after the splash screen on iPhone 14 Pro. Reinstalling and clearing cache did not resolve the issue.",
    customer: "Amanda Wilson",
    priority: "High",
    status: "In Progress",
    createdAt: "2024-08-01"
  },
  {
    id: "TKT-1065432",
    title: "Search Feature Returns No Results",
    description: "Searching for any product keyword returns zero results even though the items exist in the catalog. Filters are not applied.",
    customer: "James Anderson",
    priority: "Medium",
    status: "Open",
    createdAt: "2024-08-03"
  },
  {
    id: "TKT-9954321",
    title: "Two-Factor Authentication Not Working",
    description: "Customer cannot receive the 2FA verification code via SMS. Phone number is correct and carrier is not blocking short codes.",
    customer: "Lisa Thompson",
    priority: "High",
    status: "Open",
    createdAt: "2024-08-05"
  },
  {
    id: "TKT-8843210",
    title: "Data Export Feature Broken",
    description: "Clicking the export button generates a corrupted CSV file that cannot be opened in Excel or Google Sheets. File size shows 0KB.",
    customer: "Daniel Garcia",
    priority: "Medium",
    status: "Open",
    createdAt: "2024-08-08"
  },
  {
    id: "TKT-7732109",
    title: "Account Locked After Password Reset",
    description: "After resetting password, the account shows as locked. Customer cannot access any features and the unlock email was never received.",
    customer: "Karen White",
    priority: "High",
    status: "In Progress",
    createdAt: "2024-08-10"
  },
  {
    id: "TKT-6620987",
    title: "Subscription Cancellation Not Processing",
    description: "Customer submitted a cancellation request three days ago but continues to be billed. The subscription status still shows active.",
    customer: "Christopher Lee",
    priority: "Medium",
    status: "Open",
    createdAt: "2024-08-12"
  }
];

export default tickets;
