import Image from "next/image";
import homepage_image from "@/app/assets/velocity_homepage.png"

export default function Body() {
  return (
    <div className="flex bg-neutral-900 h-screen items-center justify-center">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-white font-bold text-5xl px-10">Being Fit is Not a Destination,</h1>
        <h1 className="text-white font-bold text-5xl mt-4 px-40">But a Way of Life</h1>
      </div>
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-red-700 blur-lg rounded-[30%]" 
          aria-hidden="true"
        /> 
        <Image
          src={homepage_image}
          alt="Velocity logo"
          className="relative w-full h-full rounded-[30%] object-cover"
        />
      </div>
    </div>
  );
}