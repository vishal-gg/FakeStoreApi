import Link from "next/link";
import Image from "next/image";
import showcase from "../../public/showcase.jpg";

const About = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900/50 text-center py-16">
      <div className="w-[min(1200px,100%-4rem)] mx-auto">
        <h2 className="text-5xl max-md:text-3xl font-bold mb-5">
          Had enough of boring dummy data?
        </h2>
        <p className="text-lg text-gray-500 w-[min(1000px,100%)] mx-auto">
          We offer the finest free products API available. We've carefully
          selected top-notch product thumbnails and details to ensure websites
          built using our API stand out ✨.
        </p>
      </div>

      <div className="mt-16">
        <Link href="https://snapstore.vercel.app" target="_blank">
          <div className="w-[min(768px,100%-4rem)] aspect-video relative mx-auto shadow-md dark:shadow-white/20 group overflow-hidden rounded-xl hover:rounded-3xl transition-all hover:shadow-xl">
            <Image
              src={showcase}
              className="h-full w-full object-contain group-hover:scale-[1.02] transition-transform"
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
