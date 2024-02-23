import About from "./components/About"
import Hero from "./components/Hero"
import Resources from "./components/Resources"
import Route from "./components/Route"

const page = () => {
  return (
    <div className="pb-16">
      <Hero />
      <About />
      <Resources />
      <Route />
    </div>
  )
}

export default page
