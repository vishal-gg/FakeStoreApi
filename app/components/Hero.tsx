import React from "react";
import Image from "next/image";
import img from "../../public/Illustration.svg";
import { Button } from "@components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="w-[min(1200px,100%-4rem)] min-h-screen mx-auto flex justify-center items-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl max-md:text-5xl font-bold mb-5">
            <span className="whitespace-nowrap text-pink-500">E-commerce</span>{" "}
            Prototyping Made Easy
          </h1>
          <p className="text-xl max-md:text-lg">
            Build and test your e-commerce website or app seamlessly with our
            free and reliable Fake Store API.
          </p>
          <div className="space-x-4 mt-10">
            <Button>
              <Link
                href="https://github.com/vishal-gg/fakeStoreApi"
                target="_blank"
              >
                Source Code
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/docs">Read Docs</Link>
            </Button>
          </div>
        </div>
        <div className="">
          <div className="relative w-[500px] max-lg:hidden">
            <Image
              src={img}
              className="h-full w-full object-contain"
              alt="Illustration"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
