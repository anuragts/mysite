import Image from "next/image";
import error from "../img/error.svg";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={error}
          alt="codeai infrastructure"
          width={800}
          height={500}
        />
      </div>
      <div className="flex justify-center ">
        <div className="font-bold text-3xl md:text-5xl">Whooops !</div>
      </div>
      <div className="flex justify-center mt-[1rem] ">
        <div className="font-light text-[#7c7878] mx-8">
          Sorry the page you looking for doesn&apos;t exist
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button
          className=" rounded-full  text-base md:text-xl text-secondary px-5 py-2 my-4 hover:bg-white hover:text-black border-2 border-white"
          onClick={() => router.push("/")}
        >
          Go Back
        </button>
      </div>
    </>
  );
}