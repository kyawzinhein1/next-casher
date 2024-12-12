import Link from "next/link";
import Navigation from "../ui/components/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }} className="h-screen">
        {/* Sidebar */}
        <div
          style={{ width: "150px", background: "#fff" }}
          className="flex flex-col items-center p-4 shadow-md"
        >
          <Link href="/admin/dashboard">
            <p className="mb-4 text-blue-500 hover:text-blue-700">Dashboard</p>
          </Link>
          <Link href="/admin/category">
            <p className="mb-4 text-blue-500 hover:text-blue-700">Category</p>
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
