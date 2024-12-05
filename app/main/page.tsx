import Link from "next/link";
import MaxWithWrapper from "../components/MaxWithWrapper";
import Phone from "../components/Phone"; // Import the Phone component
import { Check } from "lucide-react";
import Newsletter from "../components/NewsLetter";
import Image from "next/image";
import dynamic from "next/dynamic";


const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Choose a Product to Customize</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Shirt Card */}
          <Link href="/configure/upload">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/13020610/pexels-photo-13020610.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Shirt"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Custom Shirt</h3>
                <p className="text-gray-600 mt-2">Customize your perfect shirt design.</p>
              </div>
            </div>
          </Link>

          {/* Mug Card */}
          <Link href="/configure/upload">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/3483967/pexels-photo-3483967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mug"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Custom Mug</h3>
                <p className="text-gray-600 mt-2">Create a personalized mug for yourself or as a gift.</p>
              </div>
            </div>
          </Link>

          {/* Phone Case Card */}
          <Link href="/configure/upload">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/10029867/pexels-photo-10029867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Phone Case"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Custom Phone Case</h3>
                <p className="text-gray-600 mt-2">Design a unique phone case to express your style.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
        {/* MaxWithWrapper section */}
    <section className="mt-24" >
      <MaxWithWrapper>
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm-center">
            <h2 className="order-1 mt-2 pr-5 pl-5 font-bold text-4xl rounded-md md:text-5xl text-black tracking-tight text-center text-balance !leading-tight">
              Upload Your Photo and Get{" "}
              <span className="relative px-2 bg-orange-600 text-white">Your Design in Seconds</span>
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
            <img alt="img"
              src="/arrow.png"
              className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
            />

            <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <img alt="img"
                src="/horse.jpg"
                className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
              />
            </div>

            <Phone className="w-60" imgSrc="/horse_phone.jpg" />
          </div>
        </div>

        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
          <li className="w-fit">
            <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
            High-quality silicone material
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
            Scratch- and fingerprint resistant coating
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
            Wireless charging compatible
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
            5-year print warranty
          </li>
        </ul>

        <Newsletter />
      </MaxWithWrapper>
    </section>
    </div>

  
  );
};

export default Page;
