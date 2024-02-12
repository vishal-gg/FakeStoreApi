import Link from 'next/link'
import { FaBars } from "react-icons/fa6";
import { PiMoonBold } from "react-icons/pi";
import { AiOutlineArrowUp } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-gray-800 my-7 py-3 max-2xl:mx-8 mx-40 px-6 rounded-sm ">
        <div className="flex items-center justify-between ">
            <div className="text-xl">logo</div>
            <div>
                <ul className="flex text-xl gap-8 max-md:hidden">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Docs</Link></li>
                    <li ><Link className="flex" href="#">Github<AiOutlineArrowUp className=" rotate-45  ml-1 text-3xl"/></Link></li>
                    <li><button className="flex">Dark<PiMoonBold className="mt-1 ml-1 text-2xl"/></button></li>
                </ul>
              <ul className="py-1 text-xl hidden gap-6 max-md:flex">
              <li><PiMoonBold/></li>
                  <li><FaBars/></li>
              </ul>
            </div>
          
        </div>
    </div>
  )
}

export default Navbar
