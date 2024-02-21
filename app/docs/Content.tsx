import { Products } from "./products/products";
import HightLight from "@/lib/HighLight";
import { HighlightContext } from "@/context/HighlightContext";
import User from "./users/User";

const Content = () => {
  return (
    <HighlightContext>
      <div className="w-[min(992px,100%)] p-5 ">
        <div className="space-y-5 pb-16">
          <h2 className="text-4xl font-semibold">Getting Started</h2>
          <p>
            Alright, so this documentation basically shows you how to use our API like a pro.<br />
            {/* We've got all sorts of goodies in there: products, users, and more! <br />
            It's your ultimate guide to making our API work for you. <br /> */}
          </p>
        </div>
        <Products />
        <User/>
        <HightLight />
      </div>
    </HighlightContext>
  )
}

export default Content;
