import Link from "next/link";
import Navigation from "../ui/components/navigation";
import { usePathname } from "next/navigation";

interface CasherLayoutProps {
  children: React.ReactNode;
}

const CasherLayout: React.FC<CasherLayoutProps> = ({ children }) => {
  const currentPath = usePathname();

  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }} className="h-screen">
        {/* Sidebar */}
        <div
          style={{ width: "150px", background: "#fff" }}
          className="flex flex-col items-left shadow-md"
        >
          <Link
            href="/casher/dashboard"
            className={
              currentPath === "/casher/dashboard"
                ? "bg-teal-500 text-white"
                : ""
            }
          >
            <p className="my-2 mx-4">Dashboard</p>
          </Link>
          <Link
            href="/casher/sale"
            className={
              currentPath === "/casher/sale" ? "bg-teal-500 text-white" : ""
            }
          >
            <p className="my-2 mx-4">Sale</p>
          </Link>
          <Link
            href="/casher/voucher"
            className={
              currentPath === "/casher/voucher" ? "bg-teal-500 text-white" : ""
            }
          >
            <p className="my-2 mx-4">Voucher</p>
          </Link>
          <Link
            href="/casher/settings"
            className={
              currentPath === "/casher/settings" ? "bg-teal-500 text-white" : ""
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

export default CasherLayout;
