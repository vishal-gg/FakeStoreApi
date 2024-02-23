import Sidebar from "./Sidebar";
import Content from "./Content";

const page = () => {
  return (
    <div className="flex w-[min(1500px,100%)] mx-auto gap-10 pt-16 max-sm:pt-28">
      <aside className="sticky top-16 z-50 h-[calc(100vh-5rem)] pl-16 w-80 max-lg:hidden">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-hidden">
        <Content />
      </main>
    </div>
  )
}

export default page;
