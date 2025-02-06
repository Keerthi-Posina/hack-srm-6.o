import { IconHome, IconSettings, IconUser } from "@tabler/icons-react"; // Import icons
import { Sidebar } from "../components/ui/sidebar";

const AdminHome = () => {
  //   const [open, setOpen] = useState(false); // Corrected variable name
  const role = "admin";

  const adminLinks = [
    // Define admin links
    { label: "Home", href: "/admin", icon: <IconHome size={20} /> },
    { label: "Users", href: "/admin/users", icon: <IconUser size={20} /> },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: <IconSettings size={20} />,
    },
    // Add more admin-specific links as needed
  ];

  const userLinks = [
    // Example user links (if you have different links for users)
    { label: "Dashboard", href: "/dashboard", icon: <IconHome size={20} /> },
    { label: "Profile", href: "/profile", icon: <IconUser size={20} /> },
  ];

  const linksToUse = role === "admin" ? adminLinks : userLinks; // Choose links based on role

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {" "}
      {/* Added flex and h-screen for full height */}
      <Sidebar links={linksToUse} /> {/* Use the correct links */}
      <div className="flex-1 overflow-y-auto">
        {" "}
        {/* Added flex-1 and overflow for content area */}
        {/* Your page content */}
        <div className="p-6">
          {" "}
          {/* Added padding */}
          <h1 className="text-3xl font-bold mb-4">
            Welcome to the {role} Dashboard
          </h1>{" "}
          {/* Improved heading */}
          {/* More content */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
