import Link from "next/link";
import Navigation from "../ui/components/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <div
          style={{ width: "150px", height: "100vh", background: "#fff" }}
          className="flex flex-col items-center p-4 shadow-md"
        >
          <Link href="/admin/dashboard">
            <p className="mb-4 text-blue-500 hover:text-blue-700">Dashboard</p>
          </Link>
          <Link href="/admin/products">
            <p className="mb-4 text-blue-500 hover:text-blue-700">Products</p>
          </Link>
          <Link href="/admin/settings">
            <p className="mb-4 text-blue-500 hover:text-blue-700">Settings</p>
          </Link>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px", background: "#f4f4f4" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
