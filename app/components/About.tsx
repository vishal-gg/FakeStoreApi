import Link from "next/link";
import Image from "next/image";
import showcase from "../../public/showcase.jpg";

const About = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900/50 text-center py-16">
      <div className="w-[min(1200px,100%-4rem)] mx-auto">
        <h2 className="text-4xl max-md:text-3xl font-bold mb-5">
          Had enough of boring dummy data?
        </h2>
        <p className="text-lg w-[min(1000px,100%)] mx-auto">
          We offer the finest free products API available. We've carefully
          selected top-notch product thumbnails and details to ensure websites
          built using our API stand out ✨.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mt-16 mb-10">Showcase</h2>
        <Link href="https://snapstore.vercel.app" target="_blank">
          <div className="w-[min(768px,100%-4rem)] aspect-video relative mx-auto">
            <Image
              src={showcase}
              className="h-full w-full object-contain"
              alt="Illustration"
              priority
              placeholder="blur"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
