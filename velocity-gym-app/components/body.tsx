import Image from "next/image";

export default function Body() {
  return (
    <div className="flex bg-neutral-900 h-screen items-center justify-center">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-white font-bold text-5xl px-10">Being Fit is Not a Destination,</h1>
        <h1 className="text-white font-bold text-5xl mt-4 px-40">But a Way of Life</h1>
      </div>
      <div className="bg-slate-500">
        <Image
      src="/resources/velocity_homepage.png"
      width={500}
      height={500}
      alt="Velocity homepage image"
    />
      </div>
    </div>
  );
}