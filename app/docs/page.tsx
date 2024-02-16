import Sidebar from "./Sidebar";
import Content from "./Content";
import PrismLoader from "@/lib/PrismLoader";

const page = () => {
  return (
    <div className="flex gap-5 pt-16">
      <aside className="sticky top-16 z-50 h-[calc(100vh-5rem)] pl-10 w-64 max-md:hidden">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-hidden">
        <Content />
      </main>
      <PrismLoader />
    </div>
  )
}

export default page;
