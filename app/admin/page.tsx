import Link from "next/link";
import Navigation from "../ui/components/navigation";
import { usePathname } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const currentPath = usePathname();
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }} className="h-screen">
        {/* Sidebar */}
        <div
          style={{ width: "150px", background: "#fff" }}
          className="flex flex-col items-left shadow-md gap-1 mt-8"
        >
          <Link
            href="/admin/dashboard"
            className={
              currentPath === "/admin/dashboard" ? "bg-teal-500 text-white" : ""
            }
          >
            <p className="my-2 mx-4">Dashboard</p>
          </Link>
          <Link
            href="/admin/category"
            className={
              currentPath === "/admin/category" ? "bg-teal-500 text-white" : ""
            }
          >
            <p className="my-2 mx-4">Category</p>
          </Link>
          <Link
            href="/admin/products"
            className={
              currentPath === "/admin/products" ? "bg-teal-500 text-white" : ""
            }
          >
            <p className="my-2 mx-4">Products</p>
          </Link>
          <Link
            href="/admin/settings"
            className={
              currentPath === "/admin/settings" ? "bg-teal-500 text-white" : ""
            }
          >
            <p className="my-2 mx-4">Settings</p>
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
