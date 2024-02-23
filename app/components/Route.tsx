import { cn } from "@/lib/utils";
import Link from "next/link";

const Route = () => {
  const routes = [
    { method: "GET", link: { href: "#", label: "/api/products" } },
    { method: "GET", link: { href: "#", label: "/api/products/1" } },
    { method: "GET", link: { href: "#", label: "/api/products?page=2" } },
    { method: "GET", link: { href: "#", label: "/api/products?limit=20" } },
    { method: "GET", link: { href: "#", label: "/api/products/category" } },
    {
      method: "GET",
      link: { href: "#", label: "/api/products/category?type=mobile" },
    },
    {
      method: "GET",
      link: { href: "#", label: "/api/products/category?type=tv&sort=desc" },
    },
    { method: "POST", link: { href: "#", label: "/api/products" } },
    { method: "PUT", link: { href: "#", label: "/api/products/5" } },
    { method: "PATCH", link: { href: "#", label: "/api/products/7" } },
    { method: "DELETE", link: { href: "#", label: "/api/products/3" } },
  ];

  return (
    <div className="w-[min(1000px,100%)] mx-auto mt-16 px-8">
      <div className="">
        <h2 className="text-4xl font-bold mb-3">Routes</h2>
        <p className="text-lg text-gray-500">All HTTP methods are supported.</p>
      </div>
      <div className="overflow-x-auto mt-5">
        {routes.map((route) => (
          <div
            key={route.link.label}
            className="text-lg font-medium grid min-w-72 grid-cols-30%-1fr max-sm:grid-cols-2"
          >
            <span
              className={cn(
                "whitespace-nowrap text-green-500 w-fit px-2 py-1",
                route.method === "DELETE" && "text-red-500",
                ["POST", "PUT", "PATCH"].includes(route.method) &&
                  "text-orange-500"
              )}
            >
              {route.method}
            </span>
            <Link
              href={route.link.href}
              className={cn(
                "whitespace-nowrap w-fit cursor-text",
                route.method === "GET" &&
                  "text-pink-500 hover:underline cursor-pointer"
              )}
            >
              {route.link.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Route;
