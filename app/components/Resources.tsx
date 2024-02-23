import Link from "next/link";

const Resources = () => {
  const resources = [
    { link: { href: "#", label: "/api/products" }, title: "150 products" },
    { link: { href: "#", label: "/api/users" }, title: "50 users" },
  ];

  return (
    <div className="w-[min(1000px,100%)] mx-auto mt-16 px-8">
      <div className="">
        <h2 className="text-4xl font-bold mb-3">Resources</h2>
        <p className="text-lg text-gray-500">
          We offer access to two main resources through our REST API.
        </p>
      </div>
      <div className="overflow-x-auto mt-5">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="text-lg font-medium grid min-w-72 grid-cols-30%-1fr max-sm:grid-cols-2"
          >
            <Link
              href={resource.link.href}
              className="text-pink-500 hover:underline w-fit"
            >
              {resource.link.label}
            </Link>
            <span className="whitespace-nowrap w-fit">{resource.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources;